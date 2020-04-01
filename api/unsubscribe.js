require('isomorphic-fetch')

const {
    AIRTABLE_API_KEY,
    AIRTABLE_ENDPOINT,
    ZAPIER_ENDPOINT_UNSUBSCRIBE,
} = process.env

module.exports = async (req, res) => {
    const { id } = req.query

    const atRes = await fetch(`${AIRTABLE_ENDPOINT}/${id}`, {
        headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        },
    })

    const record = await atRes.json()

    const atDelete = fetch(`${AIRTABLE_ENDPOINT}/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        },
    })

    const z = fetch(ZAPIER_ENDPOINT_UNSUBSCRIBE, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(record.fields),
    })

    await atDelete
    await z

    res.setHeader('Location', '/?msg=unsubscribe')
    res.status(302).send()
}

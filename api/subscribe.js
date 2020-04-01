require('isomorphic-fetch')

const {
    AIRTABLE_API_KEY,
    AIRTABLE_ENDPOINT,
    ZAPIER_ENDPOINT_SUBSCRIBE,
} = process.env

module.exports = async (req, res) => {
    const at = fetch(AIRTABLE_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            records: [
                {
                    fields: req.body,
                },
            ],
        }),
    })

    const z = fetch(ZAPIER_ENDPOINT_SUBSCRIBE, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(req.body),
    })

    await at
    await z

    res.status(200).send('')
}

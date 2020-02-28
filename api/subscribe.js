require('isomorphic-fetch')

const { AIRTABLE_API_KEY, AIRTABLE_ENDPOINT } = process.env

module.exports = async (req, res) => {
    await fetch(AIRTABLE_ENDPOINT, {
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

    res.status(200).send('')
}

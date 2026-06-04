const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID
const TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN

console.log("BASE_ID:", BASE_ID)
console.log("TOKEN EXISTS:", !!TOKEN)

fetch(`https://api.airtable.com/v0/${BASE_ID}/Participants`, {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
})
  .then((r) => r.json())
  .then((data) => {
    console.log("AIRTABLE TEST:", data)
  })
  .catch((err) => {
    console.error("AIRTABLE ERROR:", err)
  })
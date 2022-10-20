const { Pool } = require('pg')

const pool = new Pool({
  connectionString:
    'postgresql://pakamon:g_nERP287rNdYWyFPZUVWw@free-tier8.aws-ap-southeast-1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Dsafepainness-2726',
})

export default {
  query: (text) => {
    return pool.query(text)
  },
}

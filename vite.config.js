import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


// this is how the read me say we should do it 


// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//     open: true
//   }
// })



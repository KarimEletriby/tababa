import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    host: true,
    port: 5173,
    open: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        homepage: resolve(__dirname, 'tababa-homepage.html'),
        doctors: resolve(__dirname, 'tababa-doctors.html'),
        doctorProfile: resolve(__dirname, 'tababa-doctor-profile.html'),
        doctorDashboard: resolve(__dirname, 'tababa-doctor-dashboard.html'),
        specialties: resolve(__dirname, 'tababa-specialties.html'),
        clinics: resolve(__dirname, 'doctor-clinics.html'),
        consultation: resolve(__dirname, 'doctor-consultation.html'),
        financial: resolve(__dirname, 'doctor-financial.html'),
        patients: resolve(__dirname, 'doctor-patients.html'),
        profile: resolve(__dirname, 'doctor-profile.html')
      }
    }
  }
});

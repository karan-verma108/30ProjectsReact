/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        normalDay:
          "url('https://img.freepik.com/premium-photo/italian-vineyard-landscape-with-hous_926199-203543.jpg')",
        coldDay:
          "url('https://ai.flux-image.com/flux/4ad8f4da-597e-4648-9099-5739e47f4919.jpg')",
        hotDay:
          "url('https://st2.depositphotos.com/4164031/8139/i/450/depositphotos_81398650-stock-photo-green-field-under-the-sun.jpg')",
        evening:
          "url('https://i.pinimg.com/474x/03/30/4f/03304f4db69facda5fb01bc837750c1f.jpg')",
        night:
          "url('https://storage.ko-fi.com/cdn/useruploads/display/59388fac-810b-4777-808c-bf52ad7ffaa8_xstrangee_a_man_and_a_woman_in_a_convertible_car_on_top_of_a__4c49ccc1-4eab-4e46-8f5b-3e369d0b7f15_3.png')",
      },
    },
  },
  plugins: [],
};

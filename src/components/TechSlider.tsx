import React from 'react';

const technologies = [
  { name: 'Laravel', logo: 'https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg' },
  { name: 'Filament', logo: 'https://shop.filamentphp.com/cdn/shop/products/kiss-cut-stickers-5.5x5.5-default-6388cb9b4f472.jpg?v=1669909410&width=1445' },
  { name: 'Livewire', logo: 'https://laravel-livewire.com/img/twitter.png' },
  { name: 'React', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyp7FFYRwNKbTumOgu4zGIJOQpv8y0ngkLHw&s' },
  { name: 'Vue', logo: 'https://vuejs.org/images/logo.png' },
  { name: 'Astro', logo: 'https://astro.build/assets/press/astro-logo-dark.svg' },
  { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
  { name: 'Node.js', logo: 'https://nodejs.org/static/images/logo.svg' },
  { name: 'MySQL', logo: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png' },
  { name: 'MariaDB', logo: 'https://mariadb.com/wp-content/uploads/2019/11/mariadb-logo-vert_blue-transparent.png' },
  { name: 'Supabase', logo: 'https://getlogo.net/wp-content/uploads/2020/11/supabase-logo-vector.png' },
  { name: 'Nuxt', logo: 'https://nuxtjs.org/design-kit/colored-logo.svg' },
  { name: 'Next.js', logo: 'https://cdn.freelogovectors.net/wp-content/uploads/2023/09/next-js-logo-freelogovectors.net_.png' },
  { name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png' },
  { name: 'Tailwind CSS', logo: 'https://tailwindcss.com/favicons/apple-touch-icon.png' },
];

const TechSlider = () => {
  return (
    <section className="py-10 bg-white dark:bg-white">
      <div className="px-4 mx-auto ">
        <h2 className="mb-8 text-2xl font-bold text-center dark:text-white"></h2>
        <div className="flex overflow-x-hidden">
          <div className="flex animate-slide">
            {[...technologies, ...technologies].map((tech, index) => (
              <div key={index} className="flex-shrink-0 w-32 mx-4">
                <img src={tech.logo} alt={tech.name} className="object-contain h-16" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSlider;
document.addEventListener('DOMContentLoaded', () => {
  const paymentContainer = document.getElementById('paymentMethods');
  const paymentMethods = [
    { name: 'PayPal', image: 'https://img.freepik.com/premium-photo/3d-render-paypal-logo-extruded-frosted-blue-glass-rotating-slowly-neon-blue-outlines-highlighti_1020495-782220.jpg?ga=GA1.1.958911878.1730032087&semt=ais_hybrid&w=740' },
    { name: 'Visa', image: 'https://cdn.prod.website-files.com/63f6e52346a353ca1752970e/644fb7a623a02d3404b61398_20230501T1259-1c3fc3d6-e028-4828-b7e8-8cc193c573b4.jpeg' },
    { name: 'MasterCard', image: 'https://img.freepik.com/premium-vector/debit-card-cartoon-isolated-vector-illustration_77417-2548.jpg?ga=GA1.1.958911878.1730032087&semt=ais_hybrid&w=740' }
  ];

  if (paymentContainer) {
    paymentMethods.forEach(method => {
      const img = document.createElement('img');
      img.src = method.image;
      img.alt = `${method.name} logo`;
      img.classList.add('payment-icon');
      paymentContainer.appendChild(img);
    });
  }
  const carousel = document.getElementById('bestSellersCarousel');

  const bestSellers = [
    {
      name: "Classic Men's Watch",
      image: [
        'https://img.freepik.com/premium-photo/gorgeous-luxury-wrist-watch-background_1262174-662.jpg?w=740',
        'https://img.freepik.com/free-photo/rehearsal-preparation-groom-s-watch-hand_8353-5810.jpg?t=st=1747035955~exp=1747039555~hmac=d1d627dbd1b3e8d6571b63e9d33cfa9afa0c0be93bb35dfc8b2e8f581ad8ffbd&w=996',
        'https://img.freepik.com/free-photo/watch-black-box-bow-tie-lie-white-windowsill_8353-687.jpg?ga=GA1.1.958911878.1730032087&semt=ais_hybrid&w=740'
      ],
      price: '$99.99'
    },
    {
      name: "Elegant Women's Watch",
      image: [
        'https://img.freepik.com/free-photo/close-up-seller-s-hand-gloves-shows-exclusive-men-s-watch-from-new-collection-luxury-jewelry-store_613910-20420.jpg?t=st=1747036544~exp=1747040144~hmac=4192e27126e458e34614ecaeef9abd381de1bb70798864138a5925ac2cf8cab6&w=996',
        'https://img.freepik.com/premium-photo/isolate-woman-wristwatch_63097-2001.jpg?ga=GA1.1.958911878.1730032087&semt=ais_hybrid&w=740',
        'https://img.freepik.com/premium-photo/girl-jacket-with-clock-wrist-watch-her-hand_722501-185.jpg?ga=GA1.1.958911878.1730032087&semt=ais_hybrid&w=740'
      ],
      price: '$199.99'
    },
    {
      name: 'SmartWatch Pro',
      image: [
        'https://img.freepik.com/free-vector/smart-watch-realistic-image-black_1284-11873.jpg?ga=GA1.1.958911878.1730032087&semt=ais_hybrid&w=740',
        'https://img.freepik.com/free-vector/realistic-fitness-trackers_23-2148530530.jpg?ga=GA1.1.958911878.1730032087&semt=ais_hybrid&w=740',
        'https://img.freepik.com/free-vector/realistic-fitness-tracker-bracelet-illustration-collection_23-2148555261.jpg?ga=GA1.1.958911878.1730032087&semt=ais_hybrid&w=740'
      ],
      price: '$299.99'
    },
    {
      name: 'Luxury Watch',
      image: [
        'https://img.freepik.com/free-photo/elegant-watch-with-silver-golden-chain-isolated_181624-27080.jpg?ga=GA1.1.958911878.1730032087&semt=ais_hybrid&w=740',
        'https://img.freepik.com/free-photo/close-up-seller-s-hands-gloves-shows-exclusive-men-s-watch-from-new-collection-luxury-jewelry-store_613910-20850.jpg?ga=GA1.1.958911878.1730032087&semt=ais_hybrid&w=740',
        'https://img.freepik.com/premium-photo/close-up-illuminated-clock_1048944-30735414.jpg?ga=GA1.1.958911878.1730032087&semt=ais_hybrid&w=740'
      ],
      price: '$499.99'
    },
    {
      name: 'Fashionable Watch',
      image: [
        'https://img.freepik.com/free-photo/close-up-woman-listening-music_23-2148574823.jpg?ga=GA1.1.958911878.1730032087&semt=ais_hybrid&w=740',
        'https://img.freepik.com/premium-photo/stylish-man-gray-jumper-elegant-business-man-s-hand-with-fas_723234-2578.jpg?ga=GA1.1.958911878.1730032087&semt=ais_hybrid&w=740',
        'https://img.freepik.com/free-vector/realistic-watches-set_1284-11684.jpg?ga=GA1.1.958911878.1730032087&semt=ais_hybrid&w=740'
      ],
      price: '$399.99'
    }
  ];

  if (carousel) {
    bestSellers.forEach((product) => {
      const item = document.createElement('div');
      item.classList.add('carousel-item');

      const imageContainer = document.createElement('div');
      imageContainer.classList.add('carousel-images');

      const imgs = [];
      product.image.forEach((src, i) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `${product.name} image ${i + 1}`;
        img.classList.add(i === 0 ? 'active' : 'hidden');
        imageContainer.appendChild(img);
        imgs.push(img);
      });

      const nav = document.createElement('div');
      nav.classList.add('carousel-nav');

      const prevBtn = document.createElement('button');
      prevBtn.textContent = 'Prev';
      const nextBtn = document.createElement('button');
      nextBtn.textContent = 'Next';
      nav.appendChild(prevBtn);
      nav.appendChild(nextBtn);

      let currentIndex = 0;
      const updateImage = (newIndex) => {
        imgs[currentIndex].classList.remove('active');
        imgs[currentIndex].classList.add('hidden');
        currentIndex = (newIndex + imgs.length) % imgs.length;
        imgs[currentIndex].classList.remove('hidden');
        imgs[currentIndex].classList.add('active');
      };

      prevBtn.addEventListener('click', () => updateImage(currentIndex - 1));
      nextBtn.addEventListener('click', () => updateImage(currentIndex + 1));

      item.appendChild(imageContainer);
      item.appendChild(nav);

      const title = document.createElement('h3');
      title.textContent = product.name;

      const price = document.createElement('p');
      price.textContent = product.price;

      const buyButton = document.createElement('button');
      buyButton.textContent = 'Buy Now';
      buyButton.classList.add('buy-now-btn');

      buyButton.addEventListener('click', () => {
        alert(`Thank you for purchasing: ${product.name} at ${product.price}`);
      });

      item.appendChild(title);
      item.appendChild(price);
      item.appendChild(buyButton);

      carousel.appendChild(item);
    });
  }
});

import bcrypt from 'bcryptjs';

const data ={ 
users:[
    {
    firstName: 'Ahmad',
    email: 'legaldexter@gmail.com',
    password: bcrypt.hashSync('1234', 8),
    isAdmin: true,
    },
    {
      firstName: 'GSK',
      email: 'sample@gmail.com',
      password: bcrypt.hashSync('12345', 8),
      isAdmin: false,
      },  
    ],

products : [
    {
      _id: '1',
      name: 'Panadol',
      formulation: ['Paracetamol', 'Aspirin', 'Caffeine'],
      image: '/images/panadol.png',
      description:
        'Paracetamol, also known as acetaminophen, is a medication used to treat pain and fever. It is typically used for mild to moderate pain relief. Evidence is mixed for its use to relieve fever in children. It is often sold in combination with other medications, such as in many cold medications.',
      brand: 'GSK',
      category: 'Painkiller',
      price: 89.99,
      countInStock: 10,
      rating: 4.5,
      numReviews: 12,
    },
  
    {
      _id: '3',
      name: 'Loprin',
      image: '/images/loprin.jpg',
      description:
        'Loprin 75 Tablet is an antiplatelet medicine used to treat and prevent heart attacks, strokes and heart-related chest pain (angina).',
      brand: 'Highnoon Labs',
      category: 'NSAID',
      price: 929.99,
      countInStock: 5,
      rating: 3,
      numReviews: 12,
    },
    {
      _id: '4',
      name: 'Glucophage',
      image: '/images/glucophage.png',
      description:
        'Glucophage (metformin) is an oral diabetes medicine that helps control blood sugar levels. Glucophage is used together with diet and exercise to improve blood sugar control in adults with type 2 diabetes mellitus.',
      brand: 'Martin Dow',
      category: 'Prescription',
      price: 399.99,
      countInStock: 11,
      rating: 5,
      numReviews: 12,
    },
    {
      _id: '5',
      name: 'Deltacortril',
      image: '/images/delta.jpg',
      description:
        'Deltacortril 5mg Tablet is a steroid. It is used for treatment of wide variety of medical conditions such as severe allergic reactions, asthma, rheumatic disorders and skin and eye disorders. It provides relief by preventing the release of substances that cause inflammation and by suppressing the immune system.',
      brand: 'Pfizer',
      category: 'Corticosteroid',
      price: 49.99,
      countInStock: 7,
      rating: 3.5,
      numReviews: 10,
    },
    {
      _id: '6',
      name: 'Pulse Oximeter',
      image: '/images/poxi.jpg',
      description:
        'Pulse oximetry is a noninvasive and painless test that measures your oxygen saturation level, or the oxygen levels in your blood.',
      brand: 'Certeza',
      category: 'Electronics',
      price: 29.99,
      countInStock: 0,
      rating: 4,
      numReviews: 12,
    },
    {
      _id: '8',
      name: 'Pulse',
      image: '/images/poxi.jpg',
      description:
        'Pulse oximetry is a noninvasive and painless test that measures your oxygen saturation level, or the oxygen levels in your blood.',
      brand: 'Certeza',
      category: 'Electronics',
      price: 29.99,
      countInStock: 0,
      rating: 4,
      numReviews: 12,
    },
    {
      _id: '10',
      name: 'Pulse',
      image: '/images/poxi.jpg',
      description:
        'Pulse oximetry is a noninvasive and painless test that measures your oxygen saturation level, or the oxygen levels in your blood.',
      brand: 'Certeza',
      category: 'Electronics',
      price: 29.99,
      countInStock: 0,
      rating: 4,
      numReviews: 12,
    },
  ]
};

export default data
  
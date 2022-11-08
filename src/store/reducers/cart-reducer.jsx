let initialState = {
  categories: [
    { name: 'books', displayName: 'books' },
    { name: 'merch', displayName: 'merch' },
    { name: 'prints', displayName: 'prints' },
  ],

  products: [
    { name: 'Arkansas Climbing Illustrated', category: 'books', price: 30, inventory: 5 },
    { name: 'Arkansas Hiking Illustrated', category: 'books', price: 30, inventory: 15 },
    { name: 'Shirts', category: 'merch', price: 25, inventory: 25 },
    { name: 'Hats', category: 'merch', price: 25, inventory: 10 },
    { name: '8x10', category: 'prints', price: 50, inventory: 500 },
    { name: '12x18', category: 'prints', price: 100, inventory: 12 },
    { name: '18x24', category: 'prints', price: 150, inventory: 90 },
  ],

  activeCategory: '',
	
};

function productReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case 'category':
      return {
        ...state,
        activeCategory: payload,
      }
    
    case 'reset':
      return initialState;

    default:
      return initialState;
      
  }
}

export const filterCategory = (activeCategory) => {
  return {
    type: 'category',
    payload: activeCategory,
  }
}

export default productReducer;
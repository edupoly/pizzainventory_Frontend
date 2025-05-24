import React from 'react';
import { useState } from 'react';

import './Menu.css';
import Navbar from '../Components/Navbar';
import { useCart } from '../Components/CartContext';
import { Link } from 'react-router-dom';
const Menu = () => {
  const {cart, setCart} = useCart([]);
 const pizzas  = [
    {
      _id: '1',
      name: 'Margherita',
      description: 'Classic delight with 100% real mozzarella cheese',
      price: 199,
      image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
      isVegetarian: true,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '2',
      name: 'Pepperoni',
      description: 'American classic with spicy pepperoni & extra cheese',
      price: 119,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '3',
      name: 'Supreme',
      description: 'Loaded with toppings including pepperoni, sausage, bell peppers, onions, and olives',
      price: 139,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '4',
      name: 'Veggie Delight',
      description: 'Fresh vegetables including tomatoes, bell peppers, onions, and mushrooms',
      price: 109,
      image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47',
      isVegetarian: true,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '5',
      name: 'BBQ Chicken',
      description: 'Grilled chicken, BBQ sauce, red onions, and cilantro on a tangy base',
      price: 129,
      image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '6',
      name: 'Hawaiian',
      description: 'Ham and pineapple on a classic base - a sweet and savory combination',
      price: 119,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQilFQIZkn1KZCG_jZgSfUIr82isWO3vk8ZIg&s',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '7',
      name: 'Buffalo Chicken',
      description: 'Spicy buffalo chicken with blue cheese and ranch drizzle',
      price: 129,
      image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '8',
      name: 'Four Cheese',
      description: 'Blend of mozzarella, cheddar, parmesan, and gorgonzola cheeses',
      price: 119,
      image: 'https://images.unsplash.com/photo-1548369937-47519962c11a',
      isVegetarian: true,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '9',
      name: 'Meat Lovers',
      description: 'Loaded with pepperoni, sausage, bacon, and ground beef',
      price: 199,
      image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '10',
      name: 'Pesto Chicken',
      description: 'Grilled chicken, pesto sauce, sun-dried tomatoes, and mozzarella',
      price: 129,
      image: 'https://images.unsplash.com/photo-1588315029754-2dd089d39a1a',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '11',
      name: 'Spinach & Feta',
      description: 'Fresh spinach, feta cheese, olives, and garlic on a white base',
      price: 119,
      image: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a',
      isVegetarian: true,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '12',
      name: 'Mushroom Truffle',
      description: 'Assorted mushrooms, truffle oil, and fresh arugula',
      price: 139,
      image: 'https://images.unsplash.com/photo-1595708684082-a173bb3a06c5',
      isVegetarian: true,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '13',
      name: 'Spicy Italian',
      description: 'Spicy Italian sausage, bell peppers, and onions with chili flakes',
      price: 129,
      image: 'https://images.unsplash.com/photo-1601924582970-9238bcb495d9',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '14',
      name: 'Mediterranean',
      description: 'Olives, feta, sun-dried tomatoes, and artichoke hearts',
      price: 139,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYF9TLdBRO6yefJb2X5InmLXidGj34SgkKHA&s',
      isVegetarian: true,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '15',
      name: 'Taco Pizza',
      description: 'Ground beef, lettuce, tomatoes, and cheddar with taco seasoning',
      price: 139,
      image: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '16',
      name: 'White Garlic',
      description: 'Creamy garlic sauce, chicken, spinach, and roasted garlic',
      price: 119,
      image: 'https://images.unsplash.com/photo-1620374645498-af6bd681a0bd',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '17',
      name: 'Philly Cheesesteak',
      description: 'Thinly sliced beef, green peppers, onions, and provolone cheese',
      price: 199,
      image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '18',
      name: 'Pineapple Jalapeño',
      description: 'Sweet pineapple and spicy jalapeños for a perfect sweet-heat combo',
      price: 119,
      image: 'https://images.unsplash.com/photo-1593504049359-74330189a345',
      isVegetarian: true,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '19',
      name: 'Bacon & Egg',
      description: 'Crispy bacon, eggs, and cheese - breakfast on a pizza',
      price: 129,
      image: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '20',
      name: 'Caprese',
      description: 'Fresh mozzarella, tomatoes, basil, and a balsamic glaze',
      price: 199,
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002',
      isVegetarian: true,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '21',
      name: 'Seafood Delight',
      description: 'Shrimp, clams, and crab with garlic butter sauce',
      price: 159,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '22',
      name: 'Greek',
      description: 'Feta, olives, red onions, and tzatziki sauce',
      price: 129,
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002',
      isVegetarian: true,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '23',
      name: 'Chicken Alfredo',
      description: 'Creamy alfredo sauce, grilled chicken, and spinach',
      price: 129,
      image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '24',
      name: 'Vegan Supreme',
      description: 'Plant-based cheese, vegan sausage, and assorted vegetables',
      price: 139,
      image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47',
      isVegetarian: true,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '25',
      name: 'Chicken Tikka',
      description: 'Tandoori chicken, onions, and peppers with a spicy tikka sauce',
      price: 139,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '26',
      name: 'Prosciutto & Arugula',
      description: 'Thin slices of prosciutto and fresh arugula with olive oil',
      price: 140,
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '27',
      name: 'Buffalo Cauliflower',
      description: 'Spicy buffalo cauliflower with vegan ranch drizzle',
      price: 119,
      image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47',
      isVegetarian: true,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '28',
      name: 'Bacon Mac & Cheese',
      description: 'Creamy mac and cheese with crispy bacon bits',
      price: 139,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '29',
      name: 'Potato Rosemary',
      description: 'Thinly sliced potatoes, rosemary, and garlic on an olive oil base',
      price: 119,
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002',
      isVegetarian: true,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '30',
      name: 'Cheeseburger',
      description: 'Ground beef, cheese, pickles, and special sauce - tastes like a burger',
      price: 139,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '31',
      name: 'Eggplant Parmesan',
      description: 'Breaded eggplant, marinara, and parmesan cheese',
      price: 119,
      image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47',
      isVegetarian: true,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '32',
      name: 'Pulled Pork',
      description: 'Slow-cooked pulled pork with BBQ sauce and red onions',
      price: 130,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '33',
      name: 'Fig & Goat Cheese',
      description: 'Fig jam, goat cheese, and prosciutto with arugula',
      price: 139,
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '34',
      name: 'Teriyaki Chicken',
      description: 'Teriyaki glazed chicken with pineapple and green onions',
      price: 120,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '35',
      name: 'Roasted Garlic',
      description: 'Whole roasted garlic cloves, olive oil, and herbs',
      price: 100,
      image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47',
      isVegetarian: true,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '36',
      name: 'Reuben',
      description: 'Corned beef, sauerkraut, Swiss cheese, and thousand island dressing',
      price: 139,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '37',
      name: 'Pear & Gorgonzola',
      description: 'Sliced pears, gorgonzola cheese, and walnuts with honey drizzle',
      price: 129,
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002',
      isVegetarian: true,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '38',
      name: 'Cajun Shrimp',
      description: 'Spicy cajun shrimp, andouille sausage, and bell peppers',
      price: 149,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '39',
      name: 'Artichoke & Olive',
      description: 'Artichoke hearts, olives, and roasted red peppers',
      price: 129,
      image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47',
      isVegetarian: true,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '40',
      name: 'The Works',
      description: 'Everything but the kitchen sink - all our toppings on one pizza',
      price: 169,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
      {
      _id: '41',
      name: 'Vegan Supreme',
      description: 'Plant-based cheese, vegan sausage, and assorted vegetables',
      price: 13.99,
      image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47',
      isVegetarian: true,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    },
    {
      _id: '42',
      name: 'Chicken Tikka',
      description: 'Tandoori chicken, onions, and peppers with a spicy tikka sauce',
      price: 139,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
      isVegetarian: false,
      sizes: [
        { size: 'small', price: 0 },
        { size: 'medium', price: 2 },
        { size: 'large', price: 4 }
      ]
    }
  ];
  
  const handleAddToCart = (pizza, size) => {

    const existingPizza = cart.find(item => item.pizza._id === pizza._id && item.size === size);

    if (existingPizza) {
      
      setCart(cart.map(item =>
        item.pizza._id === pizza._id && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
  
      setCart([...cart, { pizza, size, quantity: 1 }]);
    }
  };

  return (
    <div className="menu-container">
 
      <h1 className='fw-bold'>Pizza Menu</h1>
      <div className="pizza-list">
        {pizzas.map(pizza => (
          <div
            key={pizza._id}
            className="pizza-card"
            data-is-vegetarian={pizza.isVegetarian}
          >
            <img src={pizza.image} alt={pizza.name} className="pizza-image" />
            <h3>{pizza.name}</h3>
            <p>{pizza.description}</p>
            <p>Price: Rs{pizza.price.toFixed(2)}</p>
            <div className="sizes">
              {pizza.sizes.map(size => (
                <button
                  key={size.size}
                  onClick={() => handleAddToCart(pizza, size.size)}
                  className="size-btn"
                >
                  {size.size.charAt(0).toUpperCase() + size.size.slice(1)} Rs{(
                    pizza.price + size.price
                  ).toFixed(2)}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      {cart.length >0 &&
      <div className='d-flex d-lg-none fixed-bottom mx-4 px-4 py-3 z-1' /* style={{position:"fixed",right:"50px",bottom:"50px"}} */>
        <Link to={'/cart'} className="btn btn-primary py-2 position-relative w-100">
          <i className="bi bi-cart4 text-light fs-4 lh-1"></i> <span className='fs-4 fw-bold'>Cart</span>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
              {cart.length}
              <span className="visually-hidden">unread messages</span>
            </span>
        </Link>
      </div>
}
    </div>
  );
};

export default Menu;
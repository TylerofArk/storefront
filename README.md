# Storefront

## Author: Tyler Main

## Credits: Luis Rosales, Stephanie Hill, Stephen Martinez, Demo Code

## Phase One

Use React redux to manage global state of a storefront page.

### Branch: redux

### Functionality

- Redux Store houses initial state & presently hardcoded data set
  - This data object includes an array where individual products are assigned to a broader category
- Our Categories Component is home to buttons that use a filter category action to set state
  - Once this specific action is dispatched, it sets an active category within our reducer
- Once state is set, our List Component filters through the products and displays those the correspond based upon active category
- List items are rendered on a card via Material UI
  - Each card displayd the product name, price and quantity in inventory

### Dependencies

- [React Redux](https://react-redux.js.org/)
- [Redux](https://redux.js.org/)
- [Redux DevTools](https://github.com/reduxjs/redux-devtools/tree/main/extension)
- [MUI Core](https://mui.com/core/)

### Links

![Phase One Repo](https://github.com/TylerofArk/storefront/tree/redux)

### References

![Material UI Docs](https://mui.com/material-ui/getting-started/overview/)

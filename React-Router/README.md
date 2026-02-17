# React Router Learning Project

Welcome! This simple project demonstrates how to use **React Router** to build a multi-page website without page reloads (Single Page Application).

It covers 5 key concepts for beginners:

## 1. The Setup (Main.jsx)

We use `createBrowserRouter` to define our routes. This is the modern way to work with React Router.

- **Why?** It enables powerful features like data fetching.
- **How?** We define a "root" path (`/`) and nest other pages inside it.

## 2. Layouts (Layout.jsx)

Instead of copying the Header and Footer to every page, we use a **Layout**.

- **The Magic:** The `<Outlet />` component acts as a placeholder.
- When you visit `/about`, the Layout stays the same, but the `<Outlet />` swaps in the `About` component.

## 3. Navigation (Header.jsx)

We don't use `<a href>` tags because they cause the page to reload (slow!).

- **`<Link>`:** Instantly changes the URL without reloading.
- **`<NavLink>`:** Same as Link, but it knows if it is "active". We use this to color the current page link orange.

## 4. Dynamic Routes (User.jsx)

Allows us to use one component for many different profiles.

- **URL:** `/user/hitesh` or `/user/123`.
- **Code:** We use `useParams()` to grab that `userid` value and display it.

## 5. Data Loading (Github.jsx)

This is an advanced feature made easy!

- **Loader:** We write a function that fetches GitHub API data _before_ the component even loads.
- **Usage:** Inside the component, `useLoaderData()` gives us the data immediately. No more complex `useEffect` logic!

---

### How to Run

1. `npm install`
2. `npm run dev`

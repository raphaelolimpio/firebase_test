# Software Requirements Specification (SRS) - Ferraco Mobile

## 1. Introduction

### 1.1 Purpose

This document outlines the Software Requirements Specification (SRS) for the Ferraco Mobile application. This application aims to provide a mobile-friendly interface for the Ferraco Palmas online store, allowing users to browse products, manage their shopping cart, and make purchases.

### 1.2 Scope

This SRS covers the functional and non-functional requirements of the Ferraco Mobile application, including user interactions, system behaviors, and external interfaces.

### 1.3 Definitions, Acronyms, and Abbreviations

*   **SRS:** Software Requirements Specification
*   **DRS:** Documento de Requisitos de Software
*   **UI:** User Interface
*   **UX:** User Experience
*   **API:** Application Programming Interface
* **AI:** Artificial Inteligence
*   **CRUD:** Create, Read, Update, Delete

### 1.4 References

*   [Ferraco Palmas Website](https://ferracopalmas.com.br/)
*   README.md

### 1.5 Overview

The remainder of this document is divided into the following sections: Overall Description, Specific Requirements (Functional Requirements, Non-Functional Requirements, External Interface Requirements), and Use Cases.

## 2. Overall Description

### 2.1 Product Perspective

Ferraco Mobile will be a standalone mobile application that interacts with the Ferraco Palmas online store. It will leverage APIs to fetch product information, manage user data, and process transactions.

### 2.2 Product Functions

The primary functions of the Ferraco Mobile application include:

*   **User Authentication:** Secure user login and registration.
*   **Product Catalog:** Browsing and searching products.
*   **Shopping Cart:** Managing items in the shopping cart.
*   **Order Management:** Viewing order history.
*   **Admin Panel:** Managing products (CRUD).
* **Product Recommendations:** Recommending products for the user.

### 2.3 User Classes and Characteristics

*   **Customers:** Regular users who browse products and make purchases.
*   **Administrators:** Users with access to product management and other administrative tasks.

### 2.4 Operating Environment

*   **Mobile Devices:** iOS and Android smartphones.
*   **Operating Systems:** Recent versions of iOS and Android.
*   **Connectivity:** Requires an internet connection to access product information and process transactions.

### 2.5 Design and Implementation Constraints

*   **Security:** User data and transactions must be secured.
*   **Scalability:** The application must be able to handle a growing number of users and products.
*   **Maintainability:** The code should be clean and well-documented for ease of maintenance.
* **Performance:** The app need to be fast and have good performance.

## 3. Specific Requirements

### 3.1 Functional Requirements

#### 3.1.1 User Authentication

*   **FR01: User Registration:** Users must be able to register an account using their email and a secure password.
*   **FR02: User Login:** Users must be able to log in with their email and password.
*   **FR03: Password Recovery:** Users must be able to reset their password via email.
*   **FR04: Logout:** Users must be able to log out of their accounts.

#### 3.1.2 Product Catalog

*   **FR05: Browse Products:** Users must be able to browse products by category.
*   **FR06: Search Products:** Users must be able to search for products by name or description.
*   **FR07: View Product Details:** Users must be able to view detailed information about a product, including name, description, price, and images.

#### 3.1.3 Shopping Cart

*   **FR08: Add to Cart:** Users must be able to add products to their shopping cart.
*   **FR09: Remove from Cart:** Users must be able to remove products from their shopping cart.
*   **FR10: Update Cart Quantity:** Users must be able to update the quantity of items in their cart.
*   **FR11: View Cart:** Users must be able to view the contents of their cart, including the total price.

#### 3.1.4 Order Management

*   **FR12: Place Order:** Users must be able to place an order with the items in their cart.
*   **FR13: Order History:** Users must be able to view their order history.
*   **FR14: Order Details:** Users must be able to view the details of a specific order.

#### 3.1.5 Admin Panel

*   **FR15: Admin Login:** Administrators must be able to log in with their credentials.
*   **FR16: Product Management:** Administrators must be able to add, edit, and delete products (CRUD operations).
* **FR17: User Management**: Admins must be able to view, edit and delete users.

#### 3.1.6 Product Recommendations

* **FR18: Product Recommendations**: The app should recommend products for the user, based on their recent seen products.

### 3.2 Non-Functional Requirements

#### 3.2.1 Performance Requirements

*   **NFR01: Load Times:** Product pages must load in under 3 seconds.
*   **NFR02: Response Time:** The system must respond to user actions within 1 second.

#### 3.2.2 Security Requirements

*   **NFR03: Data Encryption:** User data and transactions must be encrypted.
*   **NFR04: Secure Authentication:** User authentication must be secure.

#### 3.2.3 Usability Requirements

*   **NFR05: Intuitive UI:** The user interface must be intuitive and easy to use.
*   **NFR06: Accessibility:** The application must be accessible to users with disabilities.

#### 3.2.4 Reliability Requirements

*   **NFR07: Error Handling:** The application must handle errors gracefully.
*   **NFR08: Data Integrity:** The system must maintain the integrity of user and product data.

#### 3.2.5 Maintainability Requirements

*   **NFR09: Code Quality:** The code must be clean, well-documented, and follow coding standards.
*   **NFR10: Modularity:** The system should be designed with modular components for ease of maintenance and updates.

### 3.3 External Interface Requirements

#### 3.3.1 User Interfaces

*   **UI01: Login Screen:** A user-friendly login screen for user authentication.
*   **UI02: Product Catalog:** A visually appealing product catalog with filters and search.
*   **UI03: Product Details:** A detailed product view with high-quality images and descriptions.
*   **UI04: Shopping Cart:** A clear and concise shopping cart interface.
*   **UI05: Order History:** A page to show the user order history.
* **UI06: Admin Panel:** Interface to the admin panel.

#### 3.3.2 Software Interfaces

*   **SI01: API Integration:** Integration with the Ferraco Palmas API for product data, user data, and order management.
* **SI02: AI Integration:** Integration with the AI recomendation system.

#### 3.3.3 Communications Interfaces

*   **CI01: HTTPS:** All communication between the mobile application and the server must use HTTPS.

## 4. Use Cases

### 4.1 UC01: Browse Products

*   **Actor:** Customer
*   **Goal:** View available products.
*   **Precondition:** User is on the main screen.
*   **Postcondition:** User is viewing the list of products.
*   **Steps:**
    1.  User navigates to the product catalog.
    2.  System displays a list of product categories.
    3. User select one category.
    4. The system shows a list of products.

### 4.2 UC02: Search Products

*   **Actor:** Customer
*   **Goal:** Find a specific product.
*   **Precondition:** User is on the product catalog screen.
*   **Postcondition:** User is viewing the search results.
*   **Steps:**
    1.  User enters a search term in the search bar.
    2.  System displays matching products.

### 4.3 UC03: Add Product to Cart

*   **Actor:** Customer
*   **Goal:** Add a product to the shopping cart.
*   **Precondition:** User is viewing a product's details.
*   **Postcondition:** Product is added to the shopping cart.
*   **Steps:**
    1.  User clicks the "Add to Cart" button.
    2.  System adds the product to the cart.
    3. System notify the user that the product was added to cart.

### 4.4 UC04: View Cart

*   **Actor:** Customer
*   **Goal:** View the contents of the shopping cart.
*   **Precondition:** User has products in the cart.
*   **Postcondition:** User is viewing the cart contents.
*   **Steps:**
    1.  User clicks on the "Cart" icon.
    2.  System displays the items in the cart.

### 4.5 UC05: User Login

*   **Actor:** Customer, Administrator
*   **Goal:** Access the application's features.
*   **Precondition:** User is on the login screen.
*   **Postcondition:** User is logged in.
*   **Steps:**
    1.  User enters their email and password.
    2.  User clicks the "Login" button.
    3.  System verifies the credentials.
    4.  User is logged in.

### 4.6 UC06: User Registration

*   **Actor:** Customer
*   **Goal:** Create a new user account.
*   **Precondition:** User is on the registration screen.
*   **Postcondition:** User account is created, and the user is logged in.
*   **Steps:**
    1.  User enters their email and password.
    2.  User clicks the "Register" button.
    3.  System creates a new user account.
    4. User is logged in.

### 4.7 UC07: Admin Login

*   **Actor:** Administrator
*   **Goal:** Access the admin panel.
*   **Precondition:** User is on the admin login screen.
*   **Postcondition:** User is logged in as an administrator.
*   **Steps:**
    1.  Administrator enters their credentials.
    2.  Administrator clicks the "Login" button.
    3.  System verifies the admin credentials.
    4.  Administrator is logged in.

### 4.8 UC08: Manage Products

*   **Actor:** Administrator
*   **Goal:** Add, edit, or delete products.
*   **Precondition:** Administrator is logged in.
*   **Postcondition:** Products are updated in the system.
*   **Steps:**
    1.  Administrator navigates to the "Product Management" section.
    2.  Administrator selects an action (add, edit, delete).
    3.  Administrator enters the necessary information.
    4.  Administrator confirms the action.

### 4.9 UC09: Get Product Recommendation

* **Actor:** Customer
* **Goal:** Get product recommendation.
* **Precondition:** The user have some products seen.
* **Postcondition:** The user gets a list of product recommended.
* **Steps:**
    1. The user navigates to the main page.
    2. The system check the last seen products.
    3. The system get a list of recommended products.
    4. The system shows the list of product for the user.
# MERN Stack Coding Challenge

## Project Description
This project aims to build a web application that fetches data from a third-party API and displays it in a user-friendly interface. The application should provide features such as transaction listing, statistics, bar chart, and pie chart.

# installation

 ## Clone the repository
 ```bash
 git clone https://github.com/AbhiDiva96/salesApp
 ```

  ## Backend
  ```bash
  cd backend
  npm install
  npm run dev
  ```

  ## Frontend
  ```bash
  cd client
  npm install
  npm run dev
  ```

  ## Run the project
  ```bash
  npm run dev
  ```

# Tasks BreakPoint

## Backend Task
 ### Tech Stack
  - Express.js  
    - Node.js
    - Express.js
    - MongoDB
    - Axios
    - dotenv
    - cors
### Data Source
- **Third Party API URL**: `https://s3.amazonaws.com/roxiler.com/product_transaction.json`
- **Request Method**: `GET`
- **Response Format**: JSON

### API Requirements

#### 1. Initialize the Database
Create an API to initialize the database by fetching JSON data from the third-party API and seeding it into the database. Define an efficient table/collection structure for storing the data.

#### 2. List All Transactions
Create an API to list all product transactions with the following features:
- **Search**: Matches text on `title`, `description`, or `price`.
- **Pagination**: Default values are `page = 1` and `per page = 10`.
- If the search parameter is empty, return all records for the given page.
- The API should take `month` as input and filter data by `dateOfSale` field regardless of the year.

#### 3. Statistics API
Create an API to provide the following statistics for the selected month:
- **Total Sale Amount**
- **Total Number of Sold Items**
- **Total Number of Not Sold Items**

#### 4. Bar Chart API
Create an API that returns the number of items in the following price ranges for the selected month:
- 0 - 100
- 101 - 200
- 201 - 300
- 301 - 400
- 401 - 500
- 501 - 600
- 601 - 700
- 701 - 800
- 801 - 900
- 901 and above

#### 5. Pie Chart API
Create an API to return unique categories and the number of items in each category for the selected month.
Example Response:

#### 6. Combined API
Create an API to combine the responses from the following APIs and return a single JSON response:
- Transactions Listing API
- Statistics API
- Bar Chart API
- Pie Chart API

---

## Frontend Task
      ### Tech Stack
      - React.js
      - Chart.js
      - Axios
      - Tailwind CSS    

### Features

#### 1. Transactions Table
- **Dropdown**: Provide a dropdown to select months (January to December). Default month should be March.
- **Table**: Display transactions of the selected month using the Transactions Listing API.
- **Search**: Implement a search box to filter transactions based on `title`, `description`, or `price`.
- **Clear Search**: Clearing the search box should reset the table to show all transactions for the selected month.
- **Pagination**:
  - `Next`: Fetch the next page data.
  - `Previous`: Fetch the previous page data.

#### 2. Transactions Statistics
- Display total sale amount, total sold items, and total not sold items for the selected month using the Statistics API.

#### 3. Transactions Bar Chart
- Display a bar chart for the selected month showing the price range and the number of items in each range using the Bar Chart API.

#### 4. Pie Chart
- Display a pie chart showing unique categories and the number of items in each category for the selected month using the Pie Chart API.

---


## Implementation Notes

### Backend
1. **Database**: Use MongoDB to store seeded data from the third-party API.
2. **Framework**: Use Express.js for creating the RESTful APIs.
3. **Data Fetching**: Use `axios` or `node-fetch` to fetch data from the third-party API.

### Frontend
1. **Framework**: Use React.js for building the UI.
2. **State Management**: Use React Context or Redux for managing state.
3. **Libraries**:
   - Use `chart.js` or `recharts` for visualizations.
   - Use `axios` or `fetch` for API calls.

### Deployment
1. **Backend**: Deploy the Express.js API using a service AWS, or Render.
2. **Frontend**: Deploy the React app using a service like Vercel, Netlify, or AWS S3.
3. **Database**: Use MongoDB Atlas for a cloud database solution.

---

## Mockups
- **Dropdown**: Month selection dropdown above the table.
- **Table**: Display paginated transactions with a search box.
- **Statistics**: Display total sales, sold items, and unsold items.
- **Bar Chart**: Price range distribution.
- **Pie Chart**: Category-wise item distribution.

---

## Expected Endpoints

### Backend Endpoints
| Method | Endpoint                  | Description                              |
|--------|---------------------------|------------------------------------------|
| GET    | /api/v1/                  | Seed database with third-party API data |
| GET    | /api/v1/product/          | List transactions with search & pagination |
| GET    | /api/v1/statistics        | Fetch transaction statistics            |
| GET    | /api/v1/barChart            | Fetch price range data                  |
| GET    | /api/v1/pieChart            | Fetch category-wise data                |
| GET    | /api/v1/combined             | Fetch combined response                 |


### Frontend Routes
| Route              | Description                                  |
|--------------------|----------------------------------------------|
| `/`                | Home page with transactions table and charts|

---


## Testing
1. **Unit Testing**: Use Jest and Supertest for API testing.
2. **Integration Testing**: Test APIs with the frontend.
3. **UI Testing**: Use tools like Cypress or Playwright.

---


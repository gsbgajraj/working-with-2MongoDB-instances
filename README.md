# working-with-2MongoDB-instances
Here's a complete README file for your project:

```markdown
# Working with 2 MongoDB Instances

This project demonstrates how to connect and manage two different MongoDB instances within a single Node.js application using MongoDB and Express.js.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (two instances running on different ports)

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/working-with-2MongoDB-instances.git
   cd working-with-2MongoDB-instances
   ```

2. **Set up the `.env` file:**

   Create a `.env` file in the root directory of your project and add the following content:

   ```bash
   MONGO_URI_1=mongodb://localhost:27017/yourFirstDatabase
   MONGO_URI_2=mongodb://localhost:27018/yourSecondDatabase
   ```

   Replace `yourFirstDatabase` and `yourSecondDatabase` with the actual names of your databases.

3. **Install dependencies:**

   Run the following command to install the necessary Node.js packages:

   ```bash
   npm install
   ```

## Environment Variables

The application relies on environment variables to connect to the MongoDB instances. The required variables should be defined in a `.env` file located at the root of the project:

- `MONGO_URI_1`: Connection string for the first MongoDB instance.
- `MONGO_URI_2`: Connection string for the second MongoDB instance.

## Usage

After setting up the environment variables and installing the dependencies, you can start the application with:

```bash
npm start
```

The application should now be running and connected to both MongoDB instances.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/YourFeature`)
3. Commit your Changes (`git commit -m 'Add YourFeature'`)
4. Push to the Branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

You can copy and paste this content directly into your `README.md` file. Just replace `your-username` and the placeholder database names with your actual information.

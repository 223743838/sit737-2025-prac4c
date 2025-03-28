# Calculator Microservice (Node.js + Express)(Advanced Operations)

A lightweight RESTful microservice that performs **basic arithmetic operations** (Addition, Subtraction, Multiplication, Division) using query parameters. This project is part of SIT737 2025 Practical 4C and demonstrates key microservice principles such as modular routing, error handling, and logging using Winston.
The service includes:

- Modular API routes 
- Advanced operations: Exponentiation, Square Root, Modulo
- Error handling for invalid input & edge cases  
- Request logging with Winston  

---

## Project Structure

```
calculator-microservice/
│
├── index.js                  # Main server file
├── routes/
│   ├── add.js
│   ├── subtract.js
│   ├── multiply.js
│   ├── divide.js
│   ├── exponential.js
│   ├── sqrt.js
│   └── modulo.js
├── logs/                     # Log files (auto-generated)
│   ├── combined.log
│   └── error.log
├── package.json              # Project metadata and dependencies
└── README.md                 # You're reading it!
```

---

## Requirements

- [Node.js](https://nodejs.org/en/) v14 or above
- npm (comes with Node.js)

---

## Getting Started

### 1. Clone or Set Up Project

```bash
git clone https://github.com/223743837/sit737-2025-prac4c.git
cd sit737-2025-prac4c
npm install
```

### 2. Install Dependencies

```bash
npm install express winston
```

### 3. Create Folders and Files

```bash
mkdir routes logs
touch index.js routes/add.js routes/subtract.js routes/multiply.js routes/divide.js
```

(Or copy from provided templates)

---

##  How It Works

Start the server:

```bash
node index.js
```

Then call the endpoints using `curl`, Postman, or a browser.

---

## API Endpoints

### Exponentiation
```
GET /exponential?base=2&exponent=3
Response: { "result": 8 }
```

###  Square Root
```
GET /sqrt?num=25
Response: { "result": 5 }
```

###  Modulo
```
GET /modulo?num1=10&num2=3
Response: { "result": 1 }
```

---

## Error Handling

- Non-numeric or missing inputs result in `400 Bad Request`.
- Division and modulo by zero are explicitly handled.
- Error messages are descriptive and logged via Winston.

---

##  Logging with Winston

Winston logs request and error messages to:

- `logs/combined.log` — All requests
- `logs/error.log` — Only errors

**View logs in real-time:**

```bash
tail -f logs/combined.log
```

---

## Author

**Sushma Singh**  
📧 s223743838@deakin.edu.au



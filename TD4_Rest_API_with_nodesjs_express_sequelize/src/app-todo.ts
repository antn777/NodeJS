import express = require('express');
import { Request, Response} from 'express';

const app = express();
app.use(express.json()); // => to parse request body with http header "content-type": "application/json"


import swaggerJsdoc = require('swagger-jsdoc'); // * as swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi = require('swagger-ui-express');
//step 6
interface LearningPackage {
    id: number;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

//Step 7

const learningPackages: LearningPackage[] = [
    { id: 1, name: "Learn TypeScript", description: "Learn the basics of TypeScript", createdAt: new Date(), updatedAt: new Date() },
    { id: 2, name: "Learn NodeJs", description: "Master Node.js for backend development", createdAt: new Date(), updatedAt: new Date() },
    { id: 3, name: "Learn Html", description: "Understand the fundamentals of HTML", createdAt: new Date(), updatedAt: new Date() },
    { id: 4, name: "Learn Angular", description: "Build powerful front-end apps with Angular", createdAt: new Date(), updatedAt: new Date() }
];
//step 8
app.get('/api/learning-packages', (req: Request, res: Response) => { res.status(200).json(learningPackages); });

//step 9
app.get('/api/package/:id', (req: Request, res: Response) => { const id = parseInt(req.params.id, 10); const packageItem = learningPackages.find(pkg => pkg.id === id); if (packageItem) { res.status(200).json(packageItem); } else { res.status(404).send(`entity not found for id: ${id}`); } });

//step 10
app.get('/api/package/:id', (req: Request, res: Response) => { const id = parseInt(req.params.id, 10); const packageItem = learningPackages.find(pkg => pkg.id === id); if (packageItem) { res.status(200).json(packageItem); } else { res.status(404).send(`entity not found for id: ${id}`); } });

//step 11
app.put('/api/package', (req: Request, res: Response) => { const updatedPackage: LearningPackage = req.body; const index = learningPackages.findIndex(pkg => pkg.id === updatedPackage.id); if (index !== -1) { learningPackages[index] = { ...learningPackages[index], ...updatedPackage, updatedAt: new Date() }; res.status(200).json(learningPackages[index]); } else { res.status(404).send(`entity not found for id: ${updatedPackage.id}`); } });

//Step 12
app.get('/api/package-summaries', (req: Request, res: Response) => { const summaries = learningPackages.map(pkg => ({ id: pkg.id, name: pkg.name })); res.status(200).json(summaries);

const jsDocOptions = {
    definition: {
        openapi: '3.0.0', // Specify the OpenAPI version
        info: {
            title: 'Express API with Swagger',
            version: '1.0.0',
            description: 'Documentation for Express API with Swagger',
        },
        components: {
            schemas: {
                Todo: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                        },
                        title: {
                            type: 'string',
                        },
                        description: {
                            type: 'string',
                        },
                    },
                },
                TodoNoId: {
                    type: 'object',
                    properties: {
                        title: {
                            type: 'string',
                        },
                        description: {
                            type: 'string',
                        },
                    },
                },
                // Define other schemas as needed
            },
        },
    },
    apis: ['app-todo.js'],
};

const apiDoc = swaggerJsdoc(jsDocOptions);
console.log('api-doc json:', JSON.stringify(apiDoc, null,2));

app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(apiDoc));



app.get('/api/liveness', (req: Request, res: Response) => {
    res.send('OK !!!');
});

interface Todo {
    id?: number;
    title: string;
    description?: string;
    priority?: number;
}

let idGenerator = 1;
function newId() {
    return idGenerator++;
}
let todos : Todo[] = [
    {id: newId(), title: 'Learn TypeScript'},
    {id: newId(), title: 'Learn Angular'},
    {id: newId(), title: 'Learn NodeJs'},
    {id: newId(), title: 'Learn Express'},
];

/**
 * @openapi
 * /api/todos:
 *   get:
 *     description: Get all todos
 *     responses:
 *       200:
 *         description: An array of Todo
 *         schema:
 *          type: array
 *          items:
 *            $ref: '#/components/schemas/Todo'
 */
app.get('/api/todos', (req: Request, res: Response) => {
    console.log('handle http GET /api/todos');
    res.send(todos);
});

/**
 * @openapi
 * /api/todos:
 *   post:
 *     description: save a new Todo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TodoNoId'
 *     responses:
 *       200:
 *         description: An array of Todo
 *         schema:
 *           $ref: '#/components/schemas/Todo'
 */
app.post('/api/todos', (req: Request, res: Response) => {
    let item = <Todo> req.body;
    console.log('handle http POST /api/todos', item);
    item.id = newId();
    todos.push(item);
    res.send(item);
});

/**
 * @openapi
 * /api/todos:
 *   put:
 *     description: update an existing todo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       200:
 *         description: An array of Todo
 *         schema:
 *           $ref: '#/components/schemas/Todo'
 */
app.put('/api/todos', (req: Request, res: Response) => {
    let item = <Todo> req.body;
    console.log('handle http PUT /api/todos', item);
    const id = item.id;
    const idx = todos.findIndex((x) => x.id === id);
    if (idx !== -1) {
        const found = todos[idx];
        if (item.title) {
            found.title = item.title;
        }
        if (item.description) {
            found.description = item.description;
        }
        res.send(found);
    } else {
        res.status(404).send('Todo entity not found by id:' + id);
    }
});


/**
 * @openapi
 * /api/todos/{id}:
 *   get:
 *     description: get a todo by its id
 *     parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           description: The ID of the Todo to get
 *           schema:
 *             type: number
 *     responses:
 *       200:
 *         description: the todo
 *         schema:
 *           $ref: '#/components/schemas/Todo'
 *       404:
 *         description: Todo not found
 */
app.get('/api/todos/:id', (req, res) => {
    const id = +req.params['id']
    console.log('handle http GET /api/todos/:id', id);
    const idx = todos.findIndex((x) => x.id === id);
    if (idx !== -1) {
        const found = todos[idx];
        res.send(found);
    } else {
        res.status(404).send('Todo entity not found by id:' + id);
    }
});


/**
 * @openapi
 * /api/todos/{id}:
 *   delete:
 *     description: delete an existing Todo by its id
 *     parameters:
 *         - name: id
 *           in: path
 *           required: true
 *           description: The ID of the Todo to delete
 *           schema:
 *             type: number
 *     responses:
 *       200:
 *         description: the deleted Todo
 *         schema:
 *           $ref: '#/components/schemas/Todo'
 *       404:
 *         description: when the Todo was not found
 */
app.delete('/api/todos/:id', (req, res) => {
    const id = +req.params['id']
    console.log('handle http DELETE /api/todos/:id', id);
    const idx = todos.findIndex((x) => x.id === id);
    if (idx !== -1) {
        const found = todos.splice(idx, 1)[0];
        res.send(found);
    } else {
        res.status(404).send('Todo entity not found by id:' + id);
    }
});

// app.patch()


console.log('starting...');
app.listen(3000, () => {
    console.log('Ok, started port 3000, please open http://localhost:3000/swagger-ui');
});


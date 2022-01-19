const { Router } = require('express');
const employeeCtrl = require('../controllers/employees.controllers');
const router = Router();

const employeesCtrl = require('../controllers/employees.controllers')

router.get('/', employeesCtrl.getEmployees);

router.post('/', employeesCtrl.createEmployee);

router.get('/:id', employeesCtrl.getEmployee);

router.put('/:id', employeesCtrl.editEmployees);

router.delete('/:id', employeeCtrl.deleteEmployees);

module.exports = router
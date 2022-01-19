const employeeCtrl = {}

const Employee = require('../models/Employee')

employeeCtrl.getEmployees = async (req, res) => {
    const Employees = await Employee.find()
    res.json(Employees)
}
employeeCtrl.createEmployee = async (req, res) => {
    const newEmployee = new Employee(req.body)
    await newEmployee.save()
    res.send({message: 'Employee Created'})
}
employeeCtrl.getEmployee = async (req, res) => {
    const employee = await Employee.findById(req.params.id)
    res.send(employee)
}
employeeCtrl.editEmployees = async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Empleados Actualizados'})
}

employeeCtrl.deleteEmployees = async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id)
    res.json({status: 'Employee Deleted'})
}

module.exports = employeeCtrl;
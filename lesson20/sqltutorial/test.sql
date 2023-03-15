SELECT
        department_name,
        COUNT(employee_id) headcount
FROM
        employees inner join departments on employees.department_id=departments.department_id
GROUP BY
        employees.department_id;
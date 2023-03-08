import sqlite3

con = sqlite3.connect('courses.db')
cur = con.cursor()

dept = input("Enter a department: ")
code = input("Enter a semester code: ")

query = f"SELECT * FROM data WHERE department=? AND semester=? ORDER BY enr DESC;"
cur.execute(query, (dept, code))

print(f"\nCourses in {dept} in semester {code}:\n")
for row in cur.fetchall():
    print(f"{row[1]} {row[2]} - Enrollment: {row[4]}")

con.close()

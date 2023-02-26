import json
def get_data():
    print('getting archived regdata from file')
    jsonfile = open("lesson14/courses.json","r")
    courses = json.load(jsonfile)
    for c in courses:
        c['instructor'] = tuple(c['instructor'])
        c['coinstructors'] = [tuple(f) for f in c['coinstructors']]
    return courses
courses = get_data()
print(len(courses))

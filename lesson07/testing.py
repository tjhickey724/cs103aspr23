def list_As(grades):
    """Return a list of all the As in grades,
    where grades is a list of scores from 0 to 100
    and As are 90-100"""
    return [grade for grade in grades if grade >= 90]
    
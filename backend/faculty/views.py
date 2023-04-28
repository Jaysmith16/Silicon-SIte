from faculty.models import *


def init_and_validate():
    if Semester.objects.count() < 8:
        for i in range(1,9):
            sem = Semester.objects.create(name = 'Sem_'+str(i), number = i)
            sem.save()
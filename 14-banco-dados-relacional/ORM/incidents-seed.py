import pandas as pd
import sqlalchemy as sa
import sqlalchemy.orm as orm
import incidents as incidents

engine = sa.create_engine("sqlite:///db/incidents.db")

session = orm.sessionmaker(bind=engine)
session = session()

path = "./dados/"

departmentFile = pd.read_csv(path + "DP.csv", sep=",")
departmentRepresentativeFile = pd.read_excel(path + "ResponsavelDP.xlsx")
cityFile = pd.read_csv(path + "Municipio.csv", sep=",")
incidentFile = pd.read_excel(path + "ocorrencias.xlsx")

departmentTable = pd.DataFrame(departmentFile)
departmentRepresentativeTable = pd.DataFrame(departmentRepresentativeFile)
cityTable = pd.DataFrame(cityFile)
incidentTable = pd.DataFrame(incidentFile)

conn = engine.connect()
metadata = sa.schema.MetaData()

departmentData = departmentTable.to_dict(orient="records")
departmentDbTable = sa.Table(incidents.Department.__tablename__, metadata, autoload_with=engine)

departmentRepresentativeData = departmentRepresentativeTable.to_dict(orient="records")
departmentRepresentativeDbTable = sa.Table(incidents.DepartmentRepresentative.__tablename__, metadata, autoload_with=engine)

cityData = cityTable.to_dict(orient="records")
cityDbTable = sa.Table(incidents.City.__tablename__, metadata, autoload_with=engine)

incidentData = incidentTable.to_dict(orient="records")
incidentDbTable = sa.Table(incidents.Incidents.__tablename__, metadata, autoload_with=engine)

try:
    conn.execute(departmentDbTable.insert(), departmentData)
    conn.execute(departmentRepresentativeDbTable.insert(), departmentRepresentativeData)
    conn.execute(cityDbTable.insert(), cityData)
    conn.execute(incidentDbTable.insert(), incidentData)
    conn.commit()
except ValueError:
    conn.rollback()
    ValueError()
finally:
    session.close_all()

print('Data Inserted')


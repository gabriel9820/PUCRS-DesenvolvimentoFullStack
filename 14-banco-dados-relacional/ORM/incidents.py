import sqlalchemy as sa
import sqlalchemy.orm as orm

engine = sa.create_engine("sqlite:///db/incidents.db")
base = orm.declarative_base()


class Department(base):
    __tablename__ = "department"

    dpCode = sa.Column(sa.INTEGER, primary_key=True, index=True)
    name = sa.Column(sa.VARCHAR(100), nullable=False)
    address = sa.Column(sa.VARCHAR(255), nullable=False)


class DepartmentRepresentative(base):
    __tablename__ = "departmentRepresentative"

    dpCode = sa.Column(sa.INTEGER, primary_key=True, index=True)
    name = sa.Column(sa.VARCHAR(100), nullable=False)


class City(base):
    __tablename__ = "city"

    IBGECode = sa.Column(sa.INTEGER, primary_key=True, index=True)
    name = sa.Column(sa.VARCHAR(100), nullable=False)
    region = sa.Column(sa.VARCHAR(25), nullable=False)


class Incidents(base):
    __tablename__ = "incidents"

    id = sa.Column(sa.INTEGER, primary_key=True, index=True)
    dpCode = sa.Column(sa.INTEGER, sa.ForeignKey(
        "department.dpCode", ondelete="NO ACTION", onupdate="CASCADE"), index=True)
    IBGECode = sa.Column(sa.INTEGER, sa.ForeignKey(
        "city.IBGECode", ondelete="NO ACTION", onupdate="CASCADE"), index=True)
    year = sa.Column(sa.CHAR(4), nullable=False)
    month = sa.Column(sa.CHAR(2), nullable=False)
    description = sa.Column(sa.VARCHAR(100), nullable=False)
    quantity = sa.Column(sa.INTEGER, nullable=False)


try:
    base.metadata.create_all(engine)
    print("Database Created")
except ValueError:
    ValueError()

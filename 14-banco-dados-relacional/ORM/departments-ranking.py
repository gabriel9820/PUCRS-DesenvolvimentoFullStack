import pandas as pd
import sqlalchemy as sa
import sqlalchemy.orm as orm
import incidents as incidents

engine = sa.create_engine("sqlite:///db/incidents.db")
sessionmaker = orm.sessionmaker(bind=engine)
session = sessionmaker()

dpRanking = session.query(
    incidents.Department.name.label("DP"),
    sa.func.sum(incidents.Incidents.quantity).label("Total")
).join(
    incidents.Incidents,
    incidents.Incidents.dpCode == incidents.Department.dpCode
).join(
    incidents.City,
    incidents.City.IBGECode == incidents.Incidents.IBGECode
).where(
    incidents.City.region == "Capital"
).group_by(
    incidents.Department.name
).order_by(
    sa.func.sum(incidents.Incidents.quantity).label("Total").desc()
).all()

print(pd.DataFrame(dpRanking))
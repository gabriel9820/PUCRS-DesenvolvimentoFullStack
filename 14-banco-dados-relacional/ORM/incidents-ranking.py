import pandas as pd
import sqlalchemy as sa
import sqlalchemy.orm as orm
import incidents as incidents

engine = sa.create_engine("sqlite:///db/incidents.db")
sessionmaker = orm.sessionmaker(bind=engine)
session = sessionmaker()

incidentsRanking = session.query(
    incidents.City.name.label("City"),
    sa.func.sum(incidents.Incidents.quantity).label("Total")
).join(
    incidents.Incidents,
    incidents.Incidents.IBGECode == incidents.City.IBGECode
).where(
    incidents.Incidents.description == "roubo_veiculo"
).group_by(
    incidents.City.name
).order_by(
    sa.func.sum(incidents.Incidents.quantity).label("Total").desc()
).all()

print(pd.DataFrame(incidentsRanking))
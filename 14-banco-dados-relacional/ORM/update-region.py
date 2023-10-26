import sqlalchemy as sa
import sqlalchemy.orm as orm
import incidents as incidents

engine = sa.create_engine("sqlite:///db/incidents.db")
metadata = sa.MetaData()
sa.MetaData.reflect(metadata, engine)

cityTable = metadata.tables[incidents.City.__tablename__]

updateRegion = sa.update(cityTable).values({"region": "RJ"}).where(cityTable.c.region == "Capital")

conn = engine.connect()

try:
    conn.execute(updateRegion)
    conn.commit()
    print("Data Updated")
except ValueError:
    ValueError()
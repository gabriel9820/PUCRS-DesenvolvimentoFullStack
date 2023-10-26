import sqlalchemy as sa
import sqlalchemy.orm as orm
import incidents as incidents

engine = sa.create_engine("sqlite:///db/incidents.db")
metadata = sa.MetaData()
sa.MetaData.reflect(metadata, engine)

cityTable = metadata.tables[incidents.City.__tablename__]

deleteRegion = sa.delete(cityTable).where(cityTable.c.region == "RJ")

conn = engine.connect()

try:
    conn.execute(deleteRegion)
    conn.commit()
    print("Data Deleted")
except ValueError:
    ValueError()
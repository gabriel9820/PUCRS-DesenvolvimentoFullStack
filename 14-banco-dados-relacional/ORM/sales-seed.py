import pandas as pd
import sqlalchemy as sa
import sqlalchemy.orm as orm
import sales as sales

engine = sa.create_engine("sqlite:///db/sales.db")

session = orm.sessionmaker(bind=engine)
session = session()

path = "./dados/"

salespersonFile = pd.read_csv(path + "vendedor.csv", sep=";")
salespersonTable = pd.DataFrame(salespersonFile)

for i in range(len(salespersonTable)):
    salesPerson = sales.Salesperson(
        id=int(salespersonTable['registro_vendedor'][i]),
        cpf=salespersonTable['cpf'][i],
        name=salespersonTable['nome'][i],
        gender=salespersonTable['genero'][i],
        email=salespersonTable['email'][i]
    )

    try:
        session.add(salesPerson)
        session.commit()
    except sa.exc.SQLAlchemyError as e:
        print("Erro ao inserir dados: ", e)

print("Salesperson Data Inserted")

productFile = pd.read_excel(path + "produto.xlsx")
productTable = pd.DataFrame(productFile)

conn = engine.connect()
metadata = sa.schema.MetaData()

productData = productTable.to_dict(orient="records")
productDbTable = sa.Table(sales.Product.__tablename__,
                          metadata, autoload_with=engine)

try:
    conn.execute(productDbTable.insert(), productData)
    conn.commit()
except sa.exc.SQLAlchemyError as e:
    print("Erro ao inserir dados: ", e)

print("Product Data Inserted")

session.close_all()

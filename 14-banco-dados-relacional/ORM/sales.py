import sqlalchemy as sa
import sqlalchemy.orm as orm

engine = sa.create_engine("sqlite:///db/sales.db")
base = orm.declarative_base()


class Customer(base):
    __tablename__ = "customer"

    cpf = sa.Column(sa.CHAR(14), primary_key=True, index=True)
    name = sa.Column(sa.VARCHAR(100), nullable=False)
    email = sa.Column(sa.VARCHAR(50), nullable=False)
    gender = sa.Column(sa.CHAR(1))
    salary = sa.Column(sa.DECIMAL(10, 2))
    birthday = sa.Column(sa.CHAR(5))
    district = sa.Column(sa.VARCHAR(50))
    city = sa.Column(sa.VARCHAR(50))
    state = sa.Column(sa.CHAR(2))


class Supplier(base):
    __tablename__ = "supplier"

    id = sa.Column(sa.INTEGER, primary_key=True, index=True)
    name = sa.Column(sa.VARCHAR(100), nullable=False)
    city = sa.Column(sa.VARCHAR(50))
    state = sa.Column(sa.CHAR(2))


class Product(base):
    __tablename__ = "product"

    barcode = sa.Column(sa.VARCHAR(20), primary_key=True, index=True)
    supplierId = sa.Column(sa.INTEGER, sa.ForeignKey(
        "supplier.id", ondelete="NO ACTION", onupdate="CASCADE"), index=True)
    description = sa.Column(sa.VARCHAR(100), nullable=False)
    gender = sa.Column(sa.CHAR(1))


class Salesperson(base):
    __tablename__ = "salesperson"

    id = sa.Column(sa.INTEGER, primary_key=True, index=True)
    cpf = sa.Column(sa.CHAR(14), nullable=False)
    name = sa.Column(sa.VARCHAR(100), nullable=False)
    email = sa.Column(sa.VARCHAR(50), nullable=False)
    gender = sa.Column(sa.CHAR(1))


class Sale(base):
    __tablename__ = "sale"

    id = sa.Column(sa.INTEGER, primary_key=True, index=True)
    customerCpf = sa.Column(sa.CHAR(14), sa.ForeignKey(
        "customer.cpf", ondelete="NO ACTION", onupdate="CASCADE"), index=True)
    salespersonId = sa.Column(sa.INTEGER, sa.ForeignKey(
        "salesperson.id", ondelete="NO ACTION", onupdate="CASCADE"), index=True)
    productBarcode = sa.Column(sa.VARCHAR(20), sa.ForeignKey(
        "product.barcode", ondelete="NO ACTION", onupdate="CASCADE"), index=True)


try:
    base.metadata.create_all(engine)
    print("Database Created")
except ValueError:
    ValueError()

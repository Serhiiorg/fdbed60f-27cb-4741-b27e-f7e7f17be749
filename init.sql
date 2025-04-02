
    CREATE TABLE products
    (
      ID UUID DEFAULT UUID_GENERATE_V4()::UUID NOT NULL,
      value jsonb NOT NULL,
      PRIMARY KEY(ID)
    );


    CREATE TABLE orders
    (
      ID UUID DEFAULT UUID_GENERATE_V4()::UUID NOT NULL,
      value jsonb NOT NULL,
      PRIMARY KEY(ID)
    );


    CREATE TABLE customers
    (
      ID UUID DEFAULT UUID_GENERATE_V4()::UUID NOT NULL,
      value jsonb NOT NULL,
      PRIMARY KEY(ID)
    );

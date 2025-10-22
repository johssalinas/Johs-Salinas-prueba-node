# Market API - Prueba Técnica Node.js

API REST desarrollada con Node.js, y Sequelize ORM.

## 🔧 Requisitos Previos

- **Node.js**
- **pnpm** (instalar: `npm install -g pnpm`)
- **Docker** y **Docker Compose**

## 🚀 Instalación y Ejecución (Paso a Paso)

### **1.** Clonar el repositorio
```bash
git clone git@github.com:johssalinas/Johs-Salinas-prueba-node.git
cd Johs-Salinas-prueba-node
```

### **2.** Instalar dependencias
```bash
pnpm install
```

### **3.** Configurar variables de entorno

**Linux/Mac:**
```bash
cp .env.example .env
```

**Windows:**
```powershell
Copy-Item .env.example .env
```

o

```cmd
copy .env.example .env
```

✅ El archivo `.env.example` ya contiene los valores correctos para Docker.

### **4.** Levantar contenedor MySQL con Docker
```bash
docker-compose up -d
```

### **5.** Crear tablas y cargar datos iniciales
```bash
pnpm seed
```
✅ Este comando ejecuta automáticamente:
1. **Sincronización de DB**: Crea todas las tablas según los modelos de Sequelize
2. **Carga de datos**: Inserta datos de prueba en las tablas
   - 10 categorías
   - 3 tiendas
   - 15 productos
   - Stock por tienda
   - 5 promociones
   - Pedidos de prueba

### **6.** Ejecutar tests
```bash
pnpm test
```
✅ Ejecuta 13 tests que validan los 4 endpoints.

### **7** Revisión manual del servidor en desarrollo
```bash
pnpm dev
```

### **8** Revisión manual del servidor como se usaría en producción
```bash
pnpm build
```

```bash
pnpm start
```

---

## 🧩 API Endpoints Implementados

### **1.** GET `/api/productos`
Lista todos los productos con stock disponible por tienda.

**Respuesta:**
```json
{
  "message": "consultado correctamente",
  "data": [
    {
      "idProducto": 1,
      "nombre": "Coca Cola 2L",
      "presentacion": "2 Litros",
      "tiendas": [
        {
          "idTienda": 1,
          "nombre": "Jumbo Cabecera",
          "stock": 45
        },
        {
          "idTienda": 2,
          "nombre": "Éxito Centro",
          "stock": 78
        },
        {
          "idTienda": 3,
          "nombre": "D1 Provenza",
          "stock": 32
        }
      ]
    },
    ...
  ]
}
```

### **2.** GET `/api/productos/mas-vendidos`
Top 10 productos más vendidos (ordenados DESC por unidades vendidas).

**Respuesta:**
```json
{
  "message": "consultado correctamente",
  "data": [
    {
      "idProducto": 9,
      "nombre": "Papas Margarita Natural",
      "presentacion": "250g",
      "unidadesVendidas": 131
    },
    {
      "idProducto": 1,
      "nombre": "Coca Cola 2L",
      "presentacion": "2 Litros",
      "unidadesVendidas": 130
    },
    ...
  ]
}
```

### **3.** GET `/api/categorias`
Categorías con al menos 1 producto, ordenadas DESC por cantidad de productos.

**Respuesta:**
```json
{
  "message": "consultado correctamente",
  "data": [
    {
      "idCategoria": 1,
      "nombre": "Bebidas",
      "cantProductos": 3
    },
    {
      "idCategoria": 2,
      "nombre": "Lácteos",
      "cantProductos": 3
    },
    ...
  ]
}
```

### **4.** GET `/api/promociones?dia=X`
Promociones filtradas por día de la semana.

**Parámetros:**
- `dia`: 0=Lunes, 1=Martes, 2=Miércoles, 3=Jueves, 4=Viernes, 5=Sábado, 6=Domingo

**Ejemplo:** `/api/promociones?dia=5` (promociones del sábado)

**Respuesta:**
```json
{
  "message": "consultado correctamente",
  "data": [
    {
      "idPromocion": 1,
      "nombre": "Combo Familiar Bebidas",
      "tiendas": [
        "Jumbo Cabecera",
        "Éxito Centro",
        "D1 Provenza"
      ]
    },
    {
      "idPromocion": 2,
      "nombre": "Descuento Lácteos",
      "tiendas": [
        "Jumbo Cabecera",
        "Éxito Centro"
      ]
    },
    {
      "idPromocion": 3,
      "nombre": "Martes de Carnes",
      "tiendas": [
        "D1 Provenza"
      ]
    },
    ...
  ]
}
```

---

## 👤 Autor

**Johs Salinas**

---

**Nota**: Este proyecto fue desarrollado como prueba técnica para demostrar conocimientos en Node.js

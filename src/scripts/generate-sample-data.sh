#!/bin/bash

# Colores para output
GREEN='\033[0;32m'
NC='\033[0m'

echo "Generando datos de ejemplo..."

# Crear usuarios
echo -e "${GREEN}Creando usuarios...${NC}"

USER1=$(curl -s -X POST http://localhost:3001/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "username": "chef_juan",
    "email": "juan@example.com",
    "password": "password123"
  }' | grep -o '"_id":"[^"]*"' | sed 's/"_id":"//;s/"//')

USER2=$(curl -s -X POST http://localhost:3001/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "username": "maria_cocina",
    "email": "maria@example.com",
    "password": "password123"
  }' | grep -o '"_id":"[^"]*"' | sed 's/"_id":"//;s/"//')

USER3=$(curl -s -X POST http://localhost:3001/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "username": "carlos_gourmet",
    "email": "carlos@example.com",
    "password": "password123"
  }' | grep -o '"_id":"[^"]*"' | sed 's/"_id":"//;s/"//')

USER4=$(curl -s -X POST http://localhost:3001/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "username": "ana_pastelera",
    "email": "ana@example.com",
    "password": "password123"
  }' | grep -o '"_id":"[^"]*"' | sed 's/"_id":"//;s/"//')

echo "Usuarios creados con IDs:"
echo "User 1: $USER1"
echo "User 2: $USER2"
echo "User 3: $USER3"
echo "User 4: $USER4"

# Arrays de ingredientes y pasos para generar recetas aleatorias
INGREDIENTES=(
  "harina" "azúcar" "huevos" "leche" "mantequilla" "sal" "pimienta" "aceite de oliva"
  "cebolla" "ajo" "tomate" "zanahoria" "papa" "arroz" "pollo" "carne molida"
  "queso" "crema" "vino blanco" "vino tinto" "limón" "perejil" "romero" "tomillo"
  "albahaca" "orégano" "comino" "curry" "canela" "nuez moscada" "chocolate" "vainilla"
  "miel" "yogur" "nueces" "almendras" "pasas" "manzana" "plátano" "fresa"
)

PASOS=(
  "Precalentar el horno a 180°C"
  "Mezclar los ingredientes secos"
  "Batir los huevos hasta que estén espumosos"
  "Cortar las verduras en cubos pequeños"
  "Sofreír la cebolla hasta que esté transparente"
  "Agregar los condimentos al gusto"
  "Cocinar a fuego medio durante 20 minutos"
  "Dejar reposar por 5 minutos antes de servir"
  "Decorar con hierbas frescas"
  "Servir caliente"
)

# Función para generar una receta aleatoria
generate_recipe() {
  local owner_id=$1
  local title="Receta $RANDOM"
  
  # Generar 3-6 ingredientes aleatorios
  local ingredients=()
  local num_ingredients=$((RANDOM % 4 + 3))
  for ((i=0; i<num_ingredients; i++)); do
    local ingredient=${INGREDIENTES[$RANDOM % ${#INGREDIENTES[@]}]}
    ingredients+=("$ingredient")
  done
  
  # Generar 3-5 pasos aleatorios
  local instructions=""
  local num_steps=$((RANDOM % 3 + 3))
  for ((i=0; i<num_steps; i++)); do
    local step=${PASOS[$RANDOM % ${#PASOS[@]}]}
    instructions+="$step\n"
  done
  
  # Convertir array de ingredientes a formato JSON
  local ingredients_json="["
  for ((i=0; i<${#ingredients[@]}; i++)); do
    ingredients_json+="\"${ingredients[$i]}\""
    if [ $i -lt $((${#ingredients[@]}-1)) ]; then
      ingredients_json+=","
    fi
  done
  ingredients_json+="]"
  
  # Crear la receta
  curl -s -X POST http://localhost:3001/api/recipes \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $2" \
    -d "{
      \"title\": \"$title\",
      \"ingredients\": $ingredients_json,
      \"instructions\": \"$instructions\"
    }" > /dev/null
}

echo -e "${GREEN}Generando recetas...${NC}"

# Obtener tokens para cada usuario
TOKEN1=$(curl -s -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "juan@example.com",
    "password": "password123"
  }' | grep -o '"jwt":"[^"]*"' | sed 's/"jwt":"//;s/"//')

TOKEN2=$(curl -s -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "maria@example.com",
    "password": "password123"
  }' | grep -o '"jwt":"[^"]*"' | sed 's/"jwt":"//;s/"//')

TOKEN3=$(curl -s -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "carlos@example.com",
    "password": "password123"
  }' | grep -o '"jwt":"[^"]*"' | sed 's/"jwt":"//;s/"//')

TOKEN4=$(curl -s -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "ana@example.com",
    "password": "password123"
  }' | grep -o '"jwt":"[^"]*"' | sed 's/"jwt":"//;s/"//')

# Generar 250 recetas para cada usuario
for i in {1..250}; do
  generate_recipe "$USER1" "$TOKEN1"
  generate_recipe "$USER2" "$TOKEN2"
  generate_recipe "$USER3" "$TOKEN3"
  generate_recipe "$USER4" "$TOKEN4"
  
  if [ $((i % 10)) -eq 0 ]; then
    echo "Generadas $((i * 4)) recetas..."
  fi
done

echo -e "${GREEN}¡Proceso completado! Se han generado 1000 recetas en total.${NC}" 


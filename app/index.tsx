import React, { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

// Separador visual
function Divider() {
  return <View style={styles.divisor} />;
}

//  Título de sección
function Seccion({ icono, titulo }) {
  return (
    <View style={styles.seccionHeader}>
      <Text style={styles.seccionIcono}>{icono}</Text>
      <Text style={styles.seccionTitulo}>{titulo}</Text>
    </View>
  );
}

// Badge / Chip
function Badge({ texto }) {
  return (
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{texto}</Text>
    </View>
  );
}

// Botón reutilizable
function Boton({ texto, onPress }) {
  return (
    <Pressable style={styles.boton} onPress={onPress}>
      <Text style={styles.botonTexto}>{texto}</Text>
    </Pressable>
  );
}

// Campo de formulario
function Campo({ label, placeholder, teclado = "default" }) {
  return (
    <View style={styles.campo}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        keyboardType={teclado}
        placeholderTextColor="#9ca3af"
        style={styles.input}
      />
    </View>
  );
}

// Tarjeta informativa
function Tarjeta({ icono, titulo, descripcion }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardIcon}>{icono}</Text>
      <View style={{ flex: 1 }}>
        <Text style={styles.cardTitle}>{titulo}</Text>
        <Text style={styles.cardText}>{descripcion}</Text>
      </View>
    </View>
  );
}

// Mini tarjeta
function MiniCard({ icono, titulo, valor }) {
  return (
    <View style={styles.miniCard}>
      <Text style={styles.miniIcon}>{icono}</Text>
      <Text style={styles.miniTitle}>{titulo}</Text>
      <Text style={styles.miniValue}>{valor}</Text>
    </View>
  );
}

// Fila de resumen
function Estadistica({ label, value }) {
  return (
    <View style={styles.statRow}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statValue}>{value}</Text>
    </View>
  );
}

export default function App() {
  const [estado, setEstado] = useState("Disponible");

  const cambiarEstado = () => {
    setEstado((prev) =>
      prev === "Disponible" ? "En clase 👩‍💻" : "Disponible"
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* HEADER PERFIL */}
      <View style={styles.header}>
        <Image
          source={require("../assets/images/photo-1533450718592-29d45635f0a9.jpg")}
          style={styles.foto}
        />

        <View style={styles.headerInfo}>
          <Text style={styles.nombre}>Kevin Y Juliana</Text>
          <Text style={styles.subtitulo}>Estudiante • React Native</Text>

          <View style={styles.estadoRow}>
            <Text style={styles.estadoLabel}>Estado:</Text>
            <Text style={styles.estado}>{estado}</Text>
          </View>

          <Boton texto="Cambiar estado" onPress={cambiarEstado} />
        </View>
      </View>

      <View style={styles.badgesContainer}>
        <Badge texto="UI/UX" />
        <Badge texto="Expo" />
        <Badge texto="Componentes" />
        <Badge texto="Mobile" />
        <Badge texto="Diseño" />
        <Badge texto="Estilos" />
      </View>

      <Divider />

      <Seccion icono="📄" titulo="Datos del Perfil" />

      <Campo label="Nombre" placeholder="Ej: Andrea" />
      <Campo label="Apellido" placeholder="Ej: Benavides" />
      <Campo
        label="Correo"
        placeholder="Ej: correo@dominio.com"
        teclado="email-address"
      />
      <Campo label="Ciudad" placeholder="Ej: Pasto" />
      <Campo
        label="Teléfono"
        placeholder="Ej: 3001234567"
        teclado="phone-pad"
      />
      <Campo
        label="Ocupación"
        placeholder="Ej: Estudiante / Desarrollador"
      />

      <Divider />

      <Seccion icono="🧩" titulo="Resumen Visual" />

      <View style={styles.miniGrid}>
        <MiniCard icono="📚" titulo="Curso" valor="Móvil" />
        <MiniCard icono="⏳" titulo="Corte" valor="1" />
        <MiniCard icono="✅" titulo="Avance" valor="UI" />
      </View>

      <View style={styles.statsBox}>
        <Text style={styles.statsTitle}>Resumen rápido</Text>
        <Estadistica label="Componentes usados" value="8+" />
        <Estadistica label="Pantallas" value="1" />
        <Estadistica label="Navegación" value="No" />
      </View>

      <Divider />

      <Seccion icono="📌" titulo="Tarjetas Informativas" />

      <Tarjeta
        icono="⚙️"
        titulo="Habilidad principal"
        descripcion="Diseño de interfaces móviles limpias y organizadas."
      />
      <Tarjeta
        icono="📱"
        titulo="Proyecto actual"
        descripcion="App tipo perfil usando componentes reutilizables."
      />
      <Tarjeta
        icono="🚀"
        titulo="Meta del curso"
        descripcion="Aprender navegación, listas, formularios y consumo de API."
      />

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          ✅ Entrega: captura del emulador + link del repositorio (si aplica).
        </Text>
        <Text style={styles.footerWarn}>
          📌 Base directa del parcial del próximo lunes.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f8f7fc",
  },

  header: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 18,
    flexDirection: "row",
    gap: 14,
    elevation: 4,
  },

  foto: {
    width: 95,
    height: 95,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#a78bfa",
  },

  headerInfo: {
    flex: 1,
    justifyContent: "center",
  },

  nombre: {
    fontSize: 22,
    fontWeight: "700",
    color: "#4c1d95",
    letterSpacing: 0.5,
  },

  subtitulo: {
    color: "#6b7280",
    marginBottom: 8,
    fontSize: 13,
  },

  estadoLabel: {
    fontWeight: "600",
    color: "#4c1d95",
  },

  estado: {
    color: "#a78bfa",
    fontWeight: "600",
  },

  boton: {
    backgroundColor: "#7c3aed",
    paddingVertical: 11,
    borderRadius: 14,
    alignItems: "center",
  },

  botonTexto: {
    color: "white",
    fontWeight: "600",
  },

  badgesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 16,
  },

  badge: {
    backgroundColor: "#ede9fe",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
  },

  badgeText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#5b21b6",
  },

  divisor: {
    height: 1,
    backgroundColor: "#e9d5ff",
    marginVertical: 20,
  },

  seccionTitulo: {
    fontSize: 17,
    fontWeight: "700",
    color: "#4c1d95",
  },

  campo: {
    marginBottom: 14,
  },

  label: {
    marginBottom: 6,
    fontWeight: "600",
    color: "#374151",
    fontSize: 13,
  },

  input: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: "#e9d5ff",
  },

  miniGrid: {
    flexDirection: "row",
    gap: 12,
  },

  miniCard: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 14,
    borderRadius: 16,
    elevation: 3,
    alignItems: "center",
  },

  miniValue: {
    fontSize: 17,
    fontWeight: "700",
    marginTop: 4,
    color: "#7c3aed",
  },

  statsBox: {
    marginTop: 14,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 14,
    elevation: 3,
  },

  statsTitle: {
    fontWeight: "700",
    marginBottom: 10,
    color: "#4c1d95",
  },

  statRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f3e8ff",
  },

  statLabel: {
    color: "#374151",
    fontWeight: "600",
  },

  statValue: {
    color: "#7c3aed",
    fontWeight: "600",
  },

  card: {
    flexDirection: "row",
    gap: 14,
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 18,
    marginBottom: 12,
    elevation: 4,
    alignItems: "center",
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#4c1d95",
  },

  cardText: {
    color: "#6b7280",
    marginTop: 4,
    fontSize: 13,
  },

  footer: {
    marginTop: 22,
    padding: 16,
    backgroundColor: "#ede9fe",
    borderRadius: 16,
  },

  footerText: {
    color: "#4c1d95",
    fontSize: 13,
    fontWeight: "600",
  },

  footerWarn: {
    marginTop: 6,
    color: "#6b7280",
    fontSize: 12,
  },
});
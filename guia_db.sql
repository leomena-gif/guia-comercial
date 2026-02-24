-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 22-02-2026 a las 23:26:33
-- Versión del servidor: 8.0.44
-- Versión de PHP: 8.3.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `guia_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesionales`
--

CREATE TABLE `profesionales` (
  `id` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `rubro` varchar(100) NOT NULL,
  `descripcion` text,
  `email` varchar(100) DEFAULT NULL,
  `telefono` varchar(30) NOT NULL,
  `web` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `profesionales`
--

INSERT INTO `profesionales` (`id`, `nombre`, `rubro`, `descripcion`, `email`, `telefono`, `web`) VALUES
(1, 'Dr. Martín López', 'Salud', 'Médico clínico con más de 10 años de experiencia en medicina general', 'martin@email.com', '3512345678', NULL),
(2, 'Panadería El Sol', 'Gastronomía', 'Pan artesanal, facturas y medialunas todos los días desde las 6 AM', 'elsol@email.com', '3519876543', 'https://panaderiaelsol.com'),
(3, 'Estudio Arq. Pérez', 'Arquitectura', 'Diseño, dirección y construcción de viviendas y locales comerciales', 'perez@email.com', '3516543210', NULL),
(4, 'Estudio Jurídico Gómez', 'Derecho', 'Asesoramiento legal en derecho laboral, civil y societario', 'gomez@estudiojuridico.com', '3514567890', 'https://estudiogomez.com.ar'),
(5, 'Cont. Sandra Ruiz', 'Contabilidad', 'Contadora pública. Monotributo, sociedades y liquidación de sueldos', 'sandra.ruiz@contadora.com', '3518765432', NULL),
(6, 'Academia Inglés Plus', 'Educación', 'Clases de inglés para todas las edades, niveles básico a avanzado', 'info@inglesplus.com', '3513456789', 'https://inglesplus.com'),
(7, 'TechSoluciones', 'Tecnología', 'Desarrollo web, soporte técnico y reparación de equipos informáticos', 'contacto@techsoluciones.com', '3511234567', 'https://techsoluciones.com.ar'),
(8, 'Estética Valeria', 'Belleza', 'Corte, coloración, tratamientos capilares y manicuría. Turno previo', NULL, '3517654321', NULL),
(9, 'Mecánica El Turbo', 'Automotriz', 'Service, reparación general y diagnóstico computarizado de vehículos', 'elturbo@mecanica.com', '3512398765', NULL),
(10, 'Inmobiliaria Norte', 'Inmobiliaria', 'Venta y alquiler de propiedades en zona norte. Tasaciones sin cargo', 'ventas@inmobiliarianorte.com', '3519871234', 'https://inmobiliarianorte.com.ar');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `profesionales`
--
ALTER TABLE `profesionales`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `profesionales`
--
ALTER TABLE `profesionales`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

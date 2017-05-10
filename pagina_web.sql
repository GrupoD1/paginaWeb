-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-05-2017 a las 22:35:40
-- Versión del servidor: 10.1.21-MariaDB
-- Versión de PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pagina web`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personaje`
--

CREATE TABLE `personaje` (
  `personaje_id` smallint(5) UNSIGNED NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `biografia` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `personaje`
--

INSERT INTO `personaje` (`personaje_id`, `nombre`, `apellido`, `biografia`) VALUES
(1, 'Homero', 'Simpson', 'Esposo de Marge y padre de Bart, Lisa y Maggie.'),
(2, 'Bart', 'Simpson', 'Hermano de Lisa y Maggie.'),
(3, 'Lisa', 'Simpson', 'Hermana de Bart y Maggie.'),
(4, 'Marggie', 'Simpson', 'Hermana de Bart y Lisa.'),
(5, 'Marge', 'Simpson', 'Esposo de Homero y madre de Bart, Lisa y Maggie.'),
(6, 'Mariela', 'Rivas', 'Esposo de Homero y madre de Bart, Lisa y Maggie.'),
(7, 'Brandon', 'Villarroel', 'Esposo de Marge y padre de Bart, Lisa y Maggie.'),
(8, 'Leonardo', 'Simpson', 'Esposo de Marge y padre de Bart, Lisa y Maggie.'),
(9, 'Mariela', 'Rivas', 'Esposo de Homero y madre de Bart, Lisa y Maggie.'),
(10, 'Brandon', 'Villarroel', 'Esposo de Marge y padre de Bart, Lisa y Maggie.'),
(11, 'Leonardo', 'Simpson', 'Esposo de Marge y padre de Bart, Lisa y Maggie.'),
(12, 'Mariela', 'Rivas', 'Esposo de Homero y madre de Bart, Lisa y Maggie.'),
(13, 'Brandon', 'Villarroel', 'Esposo de Marge y padre de Bart, Lisa y Maggie.'),
(14, 'Leonardo', 'Simpson', 'Esposo de Marge y padre de Bart, Lisa y Maggie.'),
(15, 'Mariela', 'Rivas', 'Esposo de Homero y madre de Bart, Lisa y Maggie.'),
(16, 'Brandon', 'Villarroel', 'Esposo de Marge y padre de Bart, Lisa y Maggie.'),
(17, 'Leonardo', 'Simpson', 'Esposo de Marge y padre de Bart, Lisa y Maggie.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `Codigo` int(10) NOT NULL,
  `Nombre` varchar(30) NOT NULL,
  `Imagen` varchar(100) NOT NULL,
  `Precio` decimal(10,2) NOT NULL,
  `Cantidad` int(5) NOT NULL,
  `Categoria` varchar(20) NOT NULL,
  `Descripcion` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `personaje`
--
ALTER TABLE `personaje`
  ADD PRIMARY KEY (`personaje_id`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`Codigo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `personaje`
--
ALTER TABLE `personaje`
  MODIFY `personaje_id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `Codigo` int(10) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

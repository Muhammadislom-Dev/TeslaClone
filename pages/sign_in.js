import React, {useState} from "react"
import {useRouter} from 'next/router'
import useAuth from '../context/AuthUserContext'
import Navbar from "../components/Navbar"
import Head from "next/head"
import styles from '../styles/Auth.module.css'
import Link from "next/link"
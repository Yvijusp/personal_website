import Linkedin from 'svelte-material-icons/Linkedin.svelte';
import Github from 'svelte-material-icons/Github.svelte';
import Mail from 'svelte-material-icons/Mail.svelte';
import Html from 'svelte-material-icons/LanguageHtml5.svelte';
import Css from 'svelte-material-icons/LanguageCss3.svelte';
import Sass from 'svelte-material-icons/Sass.svelte';
import Js from 'svelte-material-icons/LanguageJavascript.svelte';
import Ts from 'svelte-material-icons/LanguageTypescript.svelte';
import React from 'svelte-material-icons/React.svelte';
import Node from 'svelte-material-icons/Nodejs.svelte';
import Sql from 'svelte-material-icons/Database.svelte';
import Java from 'svelte-material-icons/LanguageJava.svelte';
import mongodbSvelte from './assets/mongodb.svelte';
import Firebase from 'svelte-material-icons/Firebase.svelte';
import Git from 'svelte-material-icons/Git.svelte';
import MUI from 'svelte-material-icons/MaterialUi.svelte';
import Svelte_LogoSvelte from './assets/Svelte_Logo.svelte';

export const icons = [
	{
		icon: Linkedin,
		link: 'https://www.linkedin.com/in/yvijuspadolskis/',
		title: 'Linkedin'
	},
	{
		icon: Github,
		link: 'https://github.com/Yvijusp',
		title: 'Github'
	},
	{
		icon: Mail,
		link: 'mailto:yvijus@protonmail.com',
		title: 'Mail'
	}
];

export const skills = [
	{
		icon: Html,
		title: 'html-5',
		class: 'text-[#FFA500]'
	},
	{
		icon: Css,
		title: 'css-3',
		class: 'text-[#264de4]'
	},
	{
		icon: Sass,
		title: 'sass',
		class: 'text-[#CD669A]'
	},
	{
		icon: Js,
		title: 'javascript',
		class: 'text-[#E8D44D]'
	},
	{
		icon: Ts,
		title: 'typescript',
		class: 'text-[#2F74C0]'
	},
	{
		icon: React,
		title: 'react',
		class: 'text-[#61DBFB]'
	},
	{
		icon: Node,
		title: 'node',
		class: 'text-[#699F63]'
	},
	{
		icon: Sql,
		title: 'sql',
		class: 'text-[#E56C01]'
	},
	{
		icon: Java,
		title: 'java',
		class: 'text-[#5382a1]'
	},
	{
		icon: mongodbSvelte,
		title: 'mongo db',
		class: 'text-[#5382a1]'
	},
	{
		icon: Firebase,
		title: 'firebase',
		class: 'text-[#FFA611]'
	},
	{
		icon: Git,
		title: 'git',
		class: 'text-[#DE4C36]'
	},
	{
		icon: MUI,
		title: 'material ui',
		class: 'text-[#2196F3]'
	},
	{
		icon: Svelte_LogoSvelte,
		title: 'svelte',
		class: ''
	}
];

export const education = [
	{
		schoolName: 'University of Applied Sciences',
		subHeader: 'Professional Bachelor of Computing',
		duration: 'September 2017 - January 2021',
		desc: 'Took courses about Frontend web development, Java, C#, Operating Systems, Servers, Networking, Databases .'
	},
	{
		schoolName: 'CodeAcademy.lt',
		subHeader: 'JavaScript ES6 Courses',
		duration: 'April 2021 - October 2021',
		desc: 'Full stack JavaScript courses'
	}
];

export const experience = [
	{
		jobName: 'Freelance Web Developer',
		company: '',
		duration: 'June 2016 - 2017',
		description: 'Built simple websites using Wordpress, HTML and CSS',
		descBullets: ['Basic website development for experience']
	},
	{
		jobName: 'Junior Software Developer',
		company: 'Devbridge',
		duration: 'January 2022 - Current',
		description:
			'Working as Junior full stack developer. With React, MaterialUI for frontend. Java/Spring for backend. Jest and Cypress for testing',
		descBullets: []
	}
];

export const projects = [
	{
		name: 'AutoPlus simulation',
		desc: "Very simple website built on my own backend, using MongoDB as database. Simulates user registration and let's users post cars for sale.",
		github: 'https://github.com/Yvijusp/autoplus-react',
		link: 'https://yvijusp.github.io/autoplus-react/'
	},
	{
		name: 'UI template',
		desc: 'Recreated a template page from a free community figma design. Tried to keep everything pixel perfect.',
		github: 'https://github.com/Yvijusp/UI_simulation',
		link: 'https://template-finsweet.netlify.app/'
	},
	{
		name: 'Random choice generator',
		desc: 'Random choice generator using React webpack setup. Used libraries Chakra UI, styled-components.',
		github: 'https://github.com/Yvijusp/random-choice-generator',
		link: 'https://random-choice-gen.netlify.app/'
	}
];

//CoursePage.js

import UserView from '../components/UserView';
import AdminView from '../components/AdminView';
import { useContext, useEffect, useState} from 'react';
import UserContext from '../UserContext';


export default function CoursePage() {
	
	const [ allCourses, setAllCourses ] = useState([])

	const fetchData = () => {
		fetch('http://localhost:4000/courses/all')
		.then(res => res.json())
		.then(data => {
			console.log(data)
			//storing all the data to our useState allCourses
			setAllCourses(data)
		})
	}

	useEffect(() => {
		fetchData()
	}, [])

	const { user } = useContext(UserContext);

	return(
		<>
			<h1>Courses</h1>

			{(user.isAdmin === true) ?

				<AdminView />

				:

				<UserView coursesData={allCourses}/>
			}
		
		</>


		)
}
















//[SECTION] - BEFORE FETCHING API

	// import CourseCard from '../components/CourseCard';
	// import coursesData from '../mockData/coursesData';


	// export default function CoursePage() {
	// 	//Check if the mock data was captured
	// 	console.log(coursesData);
	// 	//PHP laravel
	// 	console.log(coursesData[0]);

	// 	// const courses = coursesData.map(individualCourse => {
	// 	// 	return(
	// 	// 		<CourseCard key={individualCourse.id} courseProp={individualCourse} />
	// 	// 		)
	// 	// })

	// 	const courses = coursesData.map(courseMap);

	// 	function courseMap(num) {
	// 		return (
	// 			<CourseCard key={num.id} courseProp={num} />
	// 			)
	// 	}


	// 	return(
	// 		<>
	// 			<h1>Courses</h1>
	// 			{courses}
	// 		</>


	// 		)
	// }
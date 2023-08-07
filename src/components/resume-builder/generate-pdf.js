import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

// Create Document Component
const MyDocument = ({ userData }) => (
    <Document>
        <Page size="A4" style={styles.page}>

            <View style={styles.section}>
                <Text>RESUME</Text>
                <br></br>
                <Text>PROFILE</Text>
                <br></br>
                <Text>Name: {userData.name}</Text>
                <br></br>
                <Text>Email: {userData.email}</Text>
                <br></br>
                <Text>GitHub accout: {userData.github}</Text>
                <br></br>

                <Text>EDUCATION</Text>
                <br></br>
                <Text>Degree: {userData.Degree}</Text>
                <br></br>
                <Text>institution: {userData.institution}</Text>
                <br></br>
                <Text>GPA: {userData.GPA}</Text>
                <br></br>
                <Text>graduation date: {userData.graduationdate}</Text>
                <br></br>
                <Text>course: {userData.course}</Text>
                <br></br>

                <Text>EXPERIENCES</Text>
                <br></br>
                <Text>position: {userData.position}</Text>
                <br></br>
                <Text>company: {userData.company}</Text>
                <br></br>
                <Text>city: {userData.city}</Text>
                <br></br>
                <Text>enddate: {userData.startdate}</Text>
                <br></br>
                <Text>enddate: {userData.enddate}</Text>
                <br></br>
                <Text>responsibility1: {userData.responsibility1}</Text>
                <br></br>
                <Text>responsibility2: {userData.responsibility2}</Text>
                <br></br>
                <Text>responsibility3: {userData.responsibility3}</Text>
                <br></br>

                <Text>PROJECTS</Text>
                <br></br>
                <Text>title: {userData.title}</Text>
                <br></br>
                <Text>contribution1: {userData.contribution1}</Text>
                <br></br>
                <Text>contribution2: {userData.contribution2}</Text>
                <br></br>
                
                <Text>LANGUAGES</Text>
                <br></br>
                <Text>{userData.language1}</Text>

                <Text>TOOLS</Text>
                <br></br>
                <Text> {userData.tool1}</Text>

            </View>
        </Page>
    </Document>
);
export default MyDocument;
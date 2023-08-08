import React from 'react';
import { ReactDOM } from 'react';
import { Page, Text, View, Document, StyleSheet, Font, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
// Create styles



const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        height: '100vh',
        paddingTop: 35,
        paddingBottom: 35,
        paddingHorizontal: 20,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 13,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: 'left',
        borderBottomWidth: 1,  
        borderBottomColor: 'black',
        marginTop: 10

    },
    profile: {
        fontSize: 12,
        textAlign: 'center'
    },
    main_info : {
        fontSize: 12,
        fontWeight:'bold'

    },
    text: {
        fontSize: 12,
        marginBottom: 5,
        textAlign: 'justify'
    },
    container: {
        width: '100%',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center' 
    },
    dateSeparator: {
        marginHorizontal: 5, // Adjust this for desired spacing between startdate and enddate.
    },
    bulletPoint: {
        width: 10, 
    },
    bulletContent: {
        flex: 1, 
        flexWrap: 'wrap'
    },
    bulletContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start', // To make sure bullet aligns with the top line of content if it wraps.
        marginBottom: 5,  // Spacing between bullet points
    },
    backButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 10,
        borderRadius: '10px',
        borderStyle: 'solid',
        borderColor: '#455487',
        width: '100px', // Set the container width to 100px
        marginRight: 'auto'
    },
    backbutton: {
        width: '100%',  // Takes full width of its container
        maxWidth: '100px', // Won't exceed 100px width
        padding: '12px 30px',
        fontSize: '16px',
        cursor: 'pointer',
        alignItems: 'center',
        gap: '10px',
        background: 'transparent', // reset background
        border: 'none', // reset border
        fontSize: '16px', // Assuming you want the text a bit larger
        cursor: 'pointer',
        alignItems: 'center',
        gap: '10px',
        color: '#455487'

    }
});

const ResumePDF = ({ userData }) => (
    <PDFDownloadLink document={<MyDocument userData={userData} />} fileName="resume.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download!'
      }
    </PDFDownloadLink>
  );

// Create Document Component
const MyDocument = ({ userData }) => (
    <div>
    <PDFViewer style={{ height: '100vh', width: '100%'}}>
    <Document title={`${userData.name} Resume`}>
        <Page size="A4" style={styles.page}>

            <View style={[styles.text, styles.container]}>
                <Text style={styles.title}>RESUME {userData.name}</Text>
                <br></br>
                <Text style={styles.profile}>Email: {userData.email}</Text>
                <br></br>
                <Text style={styles.profile}>GitHub account: {userData.githubaccount}</Text>
                <br></br>

                <Text style={styles.subtitle}>EDUCATION</Text>
                <br></br>
                <Text style={styles.main_info}>Institution: {userData?.uni?.toUpperCase()}</Text>
                <br></br>
                <Text style={{ fontSize: 12, fontStyle: 'italic' }}>Degree: {userData.degree}</Text>
                <br></br>
                <Text>GPA: {userData.gpa}</Text>
                <br></br>
                <Text>Expected Graduation: {userData.egd}</Text>
                <br></br>
                <Text>Relevant Courses: {userData.work}</Text>
                <br></br>
                <br></br>

                <Text style={styles.subtitle}>EXPERIENCES</Text>
                <br></br>
                <View style={styles.rowContainer}>
                    <Text style={styles.main_info}>position: {userData?.position?.toUpperCase()}</Text>
                    <Text style={styles.main_info}>city: {userData.location}</Text>
                </View>
                {/* <Text style={styles.main_info}>position: {userData?.position?.toUpperCase()}</Text> */}
                <br></br>
                {/* <Text>company: {userData.company}</Text> */}
                <br></br>
                {/* <Text>city: {userData.location}</Text> */}
                <br></br>
                <View style={styles.rowContainer}>
                    <Text style={styles.main_info}>company: {userData.company}</Text>
                    <View style={styles.dateContainer}>
                        <Text>startdate: {userData.startdate}</Text>
                        <Text style={styles.dateSeparator}>-</Text>
                        <Text>enddate: {userData.enddate}</Text>
                    </View>
                </View>
                {/* <Text>startdate: {userData.startdate}-</Text>
                <br></br>
                <Text>enddate: {userData.enddate}</Text> */}
                <br></br>
                <View style={styles.bulletContainer}>
                    <Text style={styles.bulletPoint}>•</Text>
                    <Text style={styles.bulletContent}>Responsibility1: {userData.responsibility1}</Text>
                </View>
                <View style={styles.bulletContainer}>
                    <Text style={styles.bulletPoint}>•</Text>
                    <Text style={styles.bulletContent}>Responsibility2: {userData.responsibility2}</Text>
                </View>
                <View style={styles.bulletContainer}>
                    <Text style={styles.bulletPoint}>•</Text>
                    <Text style={styles.bulletContent}>Responsibility3: {userData.responsibility3}</Text>
                </View>

                <Text style={styles.subtitle}>PROJECTS</Text>
                <br></br>
                <Text style= {styles.main_info}>projectname: {userData?.projectname?.toUpperCase()}</Text>
                <br></br>
                <View style={styles.bulletContainer}>
                    <Text style={styles.bulletPoint}>•</Text>
                    <Text style={styles.bulletContent}>contribution1: {userData.cont}</Text>
                </View>
                <br></br>
                <View style={styles.bulletContainer}>
                    <Text style={styles.bulletPoint}>•</Text>
                    <Text style={styles.bulletContent}>contribution 2:: {userData.cont}</Text>
                </View>
                <br></br>

                <Text style={styles.subtitle}>LANGUAGES</Text>
                <br></br>
                <View style={styles.bulletContainer}>
                    <Text style={styles.bulletPoint}>•</Text>
                    <Text style={styles.bulletContent}>{userData.lang}</Text>
                </View>
                <br></br>
                <Text style={styles.subtitle}>TOOLS</Text>
                <br></br>
                <View style={styles.bulletContainer}>
                    <Text style={styles.bulletPoint}>•</Text>
                    <Text style={styles.bulletContent}>{userData.tool}</Text>
                </View>
            </View>
        </Page>
    </Document>
    </PDFViewer>
    <br></br>
        <div style={styles.backButtonContainer}>
            <button style={styles.backbutton}>Back</button>
        </div>
    </div>

);


export default MyDocument;
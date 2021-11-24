import { Button, Card, Row } from "react-bootstrap";
import './application-forms.css';

export default function ApplicationForms() {
  return (
      <div style={{"margin": "20px"}}>
          <Card className="ar-form-card">
            <Card.Header>
                <Card.Title className="ar-form-card-header-title">
                    <h2>Apply to the 2022 Tempe Soccer Tournament</h2>
                </Card.Title>
            </Card.Header>
            <Card.Body className="ar-form-card-body">
                <Row className="ar-form-row">
                      <div style={{ display: "inline-block", "font-size": "small" }} dangerouslySetInnerHTML={{ __html: applicationPreText }}></div>
                      <Button variant="success" onClick={() => window.location="/team-registration"}><b>Go To Team Registration Form</b></Button>
                </Row>
            </Card.Body>
          </Card>
          <Card className="ar-form-card">
              <Card.Body className="ar-form-card-body">
                  <Row className="ar-form-row">
                    <div style={{ display: "inline-block", "font-size": "small" }} dangerouslySetInnerHTML={{ __html: teamRegistrationInformation }}></div>
                  </Row>
                  <Row className="ar-form-row">
                    <Button variant="success" onClick={() => window.location="/team-registration"}><b>Go To Team Registration Form</b></Button>
                  </Row>
              </Card.Body>
          </Card>
          <br />
          <hr />
          <hr />
          <br />
          <Card className="ar-form-card">
            <Card.Header>
                <Card.Title className="ar-form-card-header-title">
                    <h2>Referee Center for Tempe Soccer Tournament</h2>
                </Card.Title>
            </Card.Header>
            <Card.Body className="ar-form-card-body">
                <Row className="ar-form-row">
                    Please read this page fully before applying to officiate at the 2022 adidas Warrior Memorial Day Classic. Thank you.
                  </Row>
                  <Row className="ar-form-row">
                    <Button variant="danger" onClick={() => window.location="/referee-registration"}><b>Go To Referee Registration Form</b></Button>
                  </Row>
                  <Row className="ar-form-row">
                      Referee Schedule is off-line or not yet available. When it is available, you will be able to log in here.
                  </Row>
            </Card.Body>
          </Card>
      </div>
    )
}

let applicationPreText = `
<table cellspacing="10px" cellpadding="5px" border="0">
<tbody><tr><td class="body" colspan="2" valign="top"><b>WHEN: </b></td><td class="body" valign="top">March Madness Tournament. (Starts 4th of March, 2022)</td></tr>
<tr><td class="body" colspan="2" valign="top"><b>WHERE: </b></td><td class="body" valign="top">Tempe, Arizona</td></tr>
<tr><td class="body" colspan="2" valign="top"><b>FEES: </b></td><td class="body" valign="top">We have a promotional flat fee of $600 for any division this season !!!</td></tr>
<tr><td class="body" colspan="2" valign="top"><b>APPLICATION DEADLINE: </b></td><td>January 4th, 2022</td></tr>
<tr><td class="body" colspan="2" valign="top" nowrap=""><b>PAY TO:&nbsp;</b></td><td class="body" valign="top">Arizona State Soccer Federation; ASU March Madness Tournament, Attn: Selection Committee, P.O. Box 24232, Tempe, Arizona 85281 <br>
Credit Cards Accepted for Application Fees  <br><i class="fab fa-cc-paypal fa-2x"></i> <i class="fab fa-cc-visa fa-2x"></i> <i class="fab fa-cc-mastercard fa-2x"></i></td></tr>
</tbody></table>
<hr>
When completing this application, PLEASE use proper form (Upper and lower case. Example: "Cleveland Tigers" instead of "cleveland tigers" or "CLEVELAND TIGERS".). 
Also, do not use punctuation (',.&amp;;:() etc). Thank you.
<p>Fields marked with a (*) are required. The form will NOT be accepted on-line with these blank.</p>
<p>You are <b>strongly</b> encouraged to click on the HELP icons (<img src="https://tourneycentral.com/common/images/help.gif" width="17" height="15" alt="See the help for this" border="0">) next to the fields for additional information as well as guidance on completing the application correctly.</p>
`

let teamRegistrationInformation = `
<div class="ar-tr-info-red"><b><span>Please read this document completely before clicking to the application form. It will save you some work and frustration.</span></b></div>
While we offer online applications WE DO ACCEPT CREDIT CARDS via PAYPAL!! Please plan mailing time when completing your registration.
</p><div class="hed"><form method="POST" action="/cgi-bin/apply.pl">
</div><hr>
<b>While we offer online applications <span class="bodyred">WE DO ACCEPT CREDIT CARDS via PAYPAL!!</span></b> Please plan mailing time when completing your registration. <br>   <br>
<h5><b>COMPLETING THE ON-LINE APPLICATION FORM</b></h5><br>
<b>STEP 1:</b> Complete the application. ALL REQUIRED FIELDS MUST BE FILLED IN or the application will not be accepted. BE SURE TO SUPPLY AN EMAIL ADDRESS THAT IS RELIABLE AND ACCURATE as this is the ONLY way we will contact you if your team is accepted.                               <br>                               <br><b>STEP 2:</b> Once you hit Submit, your application will be sent to the tournament. THE FORM WILL NOT BE ACCEPTED if you do not supply an email address or fail to check the verification boxes at the very end of the form.                               <br>                               <br><b>STEP 3:</b> When you submit your application, you will be given a web page that contains your <b>Team ID Number</b>. You should make two copies, one to keep on file and one to mail with your fees. YOU WILL NEED YOUR TEAM ID NUMBER TO CHECK YOUR STATUS, CONFIRM IF ACCEPTED, MODIFY YOUR APPLICATION... pretty much anything that has to do with the tournament. As this is also your private log-in code, you should be careful about who has access to it.                               <br>                               <br><b>STEP 4:</b> Pick up your email. You should have a completed application certificate for each team in case you couldn't print the page on Step 3.                           <br>                           <br><b>ENTRY:</b>  All applications must be completed and received no later than March 20, 2018. The appropriate entry fee must accompany all applications. Make checks and money orders payable to the Warrior Soccer Club. Teams that are not accepted will have their entry fee returned. Any applications received after March 20, 2017 will be automatically placed on a waiting list. Because of the overwhelming response of tournament applications, we encourage that you complete the team resume field on the application. This will greatly assist the Selection Committee with your team evaluation.

<b><hr>Your team is required to book hotel rooms using the hotels only listed below to participate in the adidas Warrior Memorial Day Classic. Teams not staying at one or more of these properties, will not be considered for acceptance to the tournament.               <br>While you are free to select any hotel property you wish, you will be asked to VERIFY your rooming arrangements upon acceptance AND when you register your team on Friday night. The Warrior Soccer Club and the Warrior Soccer Classic organization assumes no liability by it's endorsement of a particular hotel.<hr></b>
<p></p><div class="hed"> <form method="POST" action="/cgi-bin/apply.pl">
</div>
<h2>Division Ages</h2>Please use the table below to verify your age group <b>BEFORE</b> proceeding to the registration form. Your application will not be accepted by the on-line registration system if the DOB of the oldest player is not consistent with the selected age group. This is a SPRING tournament.
<br><br>
<b>U08</b> - Born on or after <b>Jan 1, 2014</b><br>
<b>U09</b> - Born on or after <b>Jan 1, 2013</b><br>
<b>U10</b> - Born on or after <b>Jan 1, 2012</b><br>
<b>U11</b> - Born on or after <b>Jan 1, 2011</b><br>
<b>U12</b> - Born on or after <b>Jan 1, 2010</b><br>
<b>U13</b> - Born on or after <b>Jan 1, 2009</b><br>
<b>U14</b> - Born on or after <b>Jan 1, 2008</b><br>
<b>U15</b> - Born on or after <b>Jan 1, 2007</b><br>
<b>U16</b> - Born on or after <b>Jan 1, 2006</b><br>
<b>U17</b> - Born on or after <b>Jan 1, 2005</b><br>
<b>U18</b> - Born on or after <b>Jan 1, 2004</b><br>
<b>U19</b> - Born on or after <b>Jan 1, 2003</b><br>
<br><br>
`
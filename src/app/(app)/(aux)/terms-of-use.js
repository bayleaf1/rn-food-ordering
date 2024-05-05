import AppText from '@components/AppText/AppText'
import { SafeFullScreenLayout } from '@layouts/BaseLayout'
import { wp } from '@libs/Styling'
import { ScrollView, View } from 'react-native'

let ContentWriting = (p) => <AppText {...p} size="lg" />

let VSpace = () => <View style={{ height: wp(3) }} />

let Section = ({ title, children }) => (
  <>
    <VSpace />
    <AppText size="xl" weight="medium">
      {title}
    </AppText>
    <VSpace />
    {children}
  </>
)

let Item = (p) => <View {...p} />

export default function Page({}) {
  return (
    <SafeFullScreenLayout headerIsShown>
      <ScrollView tw={'flex-col'}>
        <ContentWriting>FISHBOX,</ContentWriting>
        <VSpace />

        <ContentWriting>LLC USER TERMS AND CONDITIONS</ContentWriting>
        <VSpace />

        <ContentWriting>Last updated: April 28, 2017</ContentWriting>
        <VSpace />

        <ContentWriting>
          These Terms of Service (“Terms of Service” or “Agreement”) govern the use of the software
          and technology platform offered by [Fishbox]. (“Fishbox”) via Fishbox’s mobile
          application, website or other similar software platforms or mediums (collectively, the
          “Fishbox Platform”). Your use of the Fishbox Platform constitutes your acceptance of and
          agreement to all of the terms and conditions in these Terms of Service and any future
          amendments and additions to this Agreement (as defined below) as we may publish from time
          to time. You represent and warrant that that: (1) you are 21 years of age or older and are
          at least of the legally required age in the jurisdiction in which you reside, and are
          otherwise capable of entering into binding contracts, and (2) you have the right,
          authority and capacity to enter into this Agreement and to abide by the terms and
          conditions of this Agreement, and that you will so abide. Where you enter into this
          Agreement on behalf of a company or other organization, you represent and warrant that you
          have authority to act on behalf of that entity and to bind that entity to this Agreement.
          You are required to agree to and accept these Terms of Service and other policies or terms
          of Fishbox to access and use the Fishbox Platform.
        </ContentWriting>

        <Section title={'1. Fishbox Platform Connects Fishbox Runners and FB Customers'}>
          <ContentWriting>
            The Fishbox Platform is a software-based communications platform which enables the
            connection between FB Customers and Fishbox Runners. “FB Customers” are individuals
            and/or businesses seeking to package acceptance, storage and delivery (“Services”) from
            Fishbox Fishbox Runners and are therefore customers of Fishbox Runners as it pertains to
            the delivery of any packages via the Fishbox Platform, and “Fishbox Runners” are
            individuals and/or businesses seeking to perform delivery Services for FB Customers. FB
            Customers and Fishbox Runners together are hereinafter referred to as “Users.” When a
            Fishbox Runner is performing services for a FB Customer (even when matched through the
            Fishbox Platform), you and such other User form a Delivery Service Agreement directly
            between the two of you as set forth in more detail in Section 3 below. FISHBOX DOES NOT
            PERFORM DELIVERY SERVICES AND DOES NOT EMPLOY INDIVIDUALS TO PERFORM DELIVERY SERVICES.
            FISHBOX DOES NOT SUPERVISE, DIRECT OR CONTROL A FISHBOX RUNNER’S WORK OR THE SERVICES IN
            ANY MANNER, WHICH THE USER HEREBY ACKNOWLEDGES.
          </ContentWriting>
          <VSpace />
          <ContentWriting>
            The Fishbox Platform only enables connections between Users for the fulfillment of
            delivery Services. Fishbox is not responsible for the performance of Users, nor does it
            have control over the quality, timing, legality, failure to provide, or any other aspect
            whatsoever of Services, Fishbox Runners, FB Customers, nor of the integrity,
            responsibility, qualifications or any of the actions or omissions whatsoever of any
            Users. Fishbox makes no representations about the suitability, reliability, timeliness,
            or accuracy of the Services requested and services provided by Users identified through
            the Fishbox Platform whether in public, private, or offline interactions. FB Customers
            are solely responsible for verifying the accuracy of their delivery address, and Fishbox
            will have no liability or responsibility for any such erroneous addresses.
          </ContentWriting>
          <VSpace />
          <ContentWriting>
            Through the Fishbox Platform, FB Customers can have their packages from online retailers
            (each, a “Box”) shipped to Fishbox and Fishbox, by using engaging Fishbox Runners as
            independent contractors, will deliver Boxes to FB Customers at the time and place of
            their choosing (each delivery from Fishbox is a “Delivery”). YOU MAY NOT, UNDER ANY
            CIRCUMSTANCES, INCLUDE THE ANY OF THE FOLLOWING ITEMS IN A DELIVERY:
          </ContentWriting>
          <VSpace />
          <View className="ml-4 flex list-disc flex-col gap-4 ">
            <Item>
              <ContentWriting>People or animals of any size;</ContentWriting>
            </Item>

            <Item>
              <ContentWriting>Illegal items;</ContentWriting>
            </Item>
            <Item>
              <ContentWriting>Fragile items;</ContentWriting>
            </Item>
            <Item>
              <ContentWriting>Very expensive or rare items;</ContentWriting>
            </Item>
            <Item>
              <ContentWriting>
                Dangerous or hazardous items, including but not limited to weapons, hazardous waste
                or human remains, explosives, or flammable items;
              </ContentWriting>
            </Item>
            <Item>
              <ContentWriting>Stolen goods;</ContentWriting>
            </Item>
            <Item>
              <ContentWriting>
                Any other good for which the transportation of such item is prohibited by applicable
                law or regulation of any federal, state, provincial, or local government in the
                origin or destination country (collectively, with all other illegal goods or
                contraband, “Prohibited Goods”).
              </ContentWriting>
            </Item>
          </View>
          <VSpace />
          <ContentWriting>
            FISHBOX RESERVES THE RIGHT TO OPEN AND INSPECT ANY BOX. FISHBOX REERVES THE RIGHT TO
            REFUSE TO PROVIDE THE SERVICE FOR ANY DELIVERY TO OR FROM ANY LOCATION, OR TO INTERCEPT,
            HOLD, OR RETURN ANY DELIVERY, WHEN AMONG OTHER REASONS, FISHBOX, IN ITS SOLE DISCRETION,
            DETERMINES THAT IT IS UNSAFE OR ECONOMICALLY OR OPERATIONALLY IMPRACTICABLE TO PROVIDE
            THE SERVICE, OR THAT THE SERVICE IS BEING USED IN VIOLATION OF FEDERAL, STATE, OR LOCAL
            LAW, OR FOR FRAUDUENT PURPOSES. THE SERVICE IS NOT INTENDED TO BE USED FOR THE DELIVERY
            OF ANY PROHIBITED GOODS AND FISHBOX WILL COOPERATE FULLY WITH ANY LAW ENFORCEMENT
            INVESTIGATION REGARDING ANY PROHIBITED GOODS DELIVERED BY FISHBOX. IN THE EVENT THAT
            PROHIBITED GODOS ARE SUSPECTED, FISHBOX RESERVES THE RIGHTS TO CONTACT THE LOCAL
            AUTHORITIES AND/OR TURN OVER THE BOX TO LOCAL AUTHORITIES AS IT DEEMS APPROPRIATE.
            NOTWITHSTANDING ANY OF THE FOREGOING, FISHBOX SHALL HAVE NO AFFIRMATIVE OBLIGATION TO
            MONITOR OR INSPECT THE BOXES IN ANY WAY AND FB CUSTOMERS SHALL REMAIN SOLELY RESPONSIBLE
            FOR ENSURING THAT BOXES DO NOT CONTAIN PROHIBITED GOODS, DO NOT VIOLATE APPLICABLE LAW
            AND FULLY COMPLY WITH THESE TERMS OF SERVICE.
          </ContentWriting>
        </Section>

        <Section title={'2. User Vetting'}>
          <ContentWriting>
            Fishbox cannot and does not assume any responsibility for the vetting of any Users.
            NEITHER FISHBOX NOR ITS AFFILIATES OR LICENSORS IS RESPONSIBLE FOR THE CONDUCT, WHETHER
            ONLINE OR OFFLINE, OF ANY USER OF THE FISHBOX PLATFORM AND YOU HEREBY RELEASE FISHBOX
            AND ITS AFFILIATES OR LICENSORS FROM ANY LIABILITY RELATED THERETO. FISHBOX AND ITS
            AFFILIATES AND LICENSORS WILL NOT BE LIABLE FOR ANY CLAIM, INJURY OR DAMAGE ARISING IN
            CONNECTION WITH YOUR USE OF THE FISHBOX PLATFORM.
          </ContentWriting>
        </Section>
        <Section title={'3. Contract between FB Customers and Fishbox Runners'}>
          <ContentWriting>
            You acknowledge and agree that a contract (the “Delivery Service Agreement”) is formed
            when you agree you to engage a Fishbox Runner through the Fishbox Platform and/or when a
            Fishbox Runner accepts a task through the Fishbox Platform. The terms of the Delivery
            Service Agreement include the terms set forth in this Section 3, the engagement terms
            proposed and accepted on the Fishbox Platform, and any other contractual terms accepted
            by both the Client and the Fishbox Runner to the extent such terms do not conflict with
            the terms in this Section 3 and do not expand Fishbox’s obligations or restrict
            Fishbox’s rights under this Agreement. You agree that Fishbox is not a party to any
            Delivery Service Agreement and the formation of a Delivery Service Agreement will not,
            under any circumstance, create an employment or other delivery service relationship
            between Fishbox and the Fishbox Runner.
          </ContentWriting>
        </Section>
        <Section title={'4.  Payment Terms'}>
          <ContentWriting>
            FB Customers shall pay for completed Services through the Fishbox Platform at the rates
            specified. All Users parties agree to notify Fishbox of any disputes prior to
            negotiation of or filing of any claims and to negotiate any dispute informally via
            Fishbox representatives for at least thirty (30) days before initiating any proceeding
            between the parties.
            <VSpace />
            We may charge you a fee (the “Fee”) for use of the Fishbox Platform. Fees will differ
            depending on which features of the Fishbox Platform you choose, such as one-off
            Deliveries, monthly Subscriptions (as defined below) or messenger services. The price
            for utilizing these features will be displayed on the Fishbox Platform.
            <VSpace />
            The Fishbox Platform may offer you the ability to schedule Deliveries at different
            prices for different services for a monthly fee (a “Subscription” and each such fee is a
            “Subscription Fee”). If you enroll in a Subscription, Subscription Fees are charged
            monthly, on the day of the month corresponding to the day of the month you originally
            became a subscriber, or if you became a subscriber on the last day of the month, on the
            last day of each month (the “Subscription Period”). By choosing a Subscription, you
            authorize Fishbox to charge your credit card the then-current Subscription Fee
            corresponding to your Subscription for each Subscription Period until you cancel your
            Subscription. Fishbox may seek pre-authorization of your credit card account prior to
            your purchase to verify that the credit card is valid and has the necessary funds or
            credit available to cover the Subscription Fee. You may cancel your Subscription at any
            time, but your cancellation of a Subscription will not be effective until the end of the
            then-current Subscription Period. If Fishbox changes the Subscription Fees for the
            Fishbox Platform, including by adding additional fees or charges, Fishbox will provide
            you advance notice of such changes. If you do not accept such changes, Fishbox has the
            right to discontinue providing the Fishbox Platform to you.
            <VSpace />
            Any Users accessing the Fishbox Platform through a mobile device, will be responsible
            for all charges, including data fees from their respective carrier.
          </ContentWriting>
        </Section>
        <Section title={'5. Release'}>
          <ContentWriting>
            With regards to delivery services, the Fishbox Platform is only a tool for connecting
            Users. Because Fishbox is not involved in the actual contact between Users or in the
            completion of the delivery Services, in the event that you have a dispute with one or
            more Users, you release Fishbox and its affiliates (and their respective officers,
            directors, agents, investors, subsidiaries, and employees) from any and all claims,
            demands, or damages (actual or consequential) of every kind and nature, known and
            unknown, suspected and unsuspected, disclosed and undisclosed, arising out of or in any
            way connected with such disputes. FISHBOX EXPRESSLY DISCLAIMS ANY LIABILITY THAT MAY
            ARISE BETWEEN USERS OF ITS FISHBOX PLATFORM. Fishbox’s sole liability with respect to
            disputes between Users shall the refund of any fees used collected by Fishbox in
            connection with such services. Further, Fishbox shall not be responsible for the any
            damage incurred by packages or for the contents of any packages delivered to or from a
            Fishbox location.
          </ContentWriting>
        </Section>
        <Section title={'6. Termination and Suspension'}>
          <ContentWriting>
            Fishbox may terminate or suspend your right to use the Fishbox Platform in the event
            that we believe that you have breached this Agreement (a “User Breach”) by providing you
            with written or email notice of such User Breach and such termination or suspension, and
            termination or suspension will be effective immediately upon delivery of such notice. If
            Fishbox terminates or suspends your right to use the Fishbox Platform as a Client for a
            User Breach, you will not be entitled to any refund of unused balance in your account,
            and you are prohibited from registering and creating a new account under your name, a
            fake or borrowed name, or the name of any third party, even if you may be acting on
            behalf of the third party. In addition to terminating or suspending your account,
            Fishbox reserves the right to take appropriate legal action, including without
            limitation pursuing civil, criminal, and injunctive redress. Even after your right to
            use the Fishbox Platform is terminated or suspended, this Agreement will remain
            enforceable against you.
            <VSpace />
            Fishbox reserves the right to modify or discontinue, temporarily or permanently, all or
            any portion of the Fishbox Platform at its sole discretion. Except for refundable fees
            you have advanced to Fishbox (if any), Fishbox is not liable to you for any modification
            or discontinuance of all or any portion of the Fishbox Platform. Notwithstanding
            anything to contrary in this Section 6, Fishbox has the right to restrict anyone from
            completing registration as a Fishbox Runner if Fishbox believes such person may threaten
            the safety and integrity of the Fishbox Platform, or if, in Fishbox’s discretion, such
            restriction is necessary to address any other reasonable business concern.
            <VSpace />
            You may terminate this Agreement at any time by ceasing all use of the Fishbox Platform.
            All sections which by their nature should survive the expiration or termination of this
            Agreement shall continue in full force and effect subsequent to and notwithstanding the
            expiration or termination of this Agreement.
          </ContentWriting>
        </Section>
        <Section title={'7. Account, Password, Security and Mobile Phone Use'}>
          <ContentWriting>
            You must register with Fishbox and create an account to use the Fishbox Platform. You
            are the sole authorized user of your account. You are responsible for maintaining the
            confidentiality of any password and account number provided by you or Fishbox for
            accessing the Fishbox Platform. You are solely and fully responsible for all activities
            that occur under your password or account. Fishbox has no control over the use of any
            User's account and expressly disclaims any liability derived therefrom. Should you
            suspect that any unauthorized party may be using your password or account or you suspect
            any other breach of security, you will contact Fishbox immediately. By providing your
            mobile phone number and using the Fishbox Platform, you hereby affirmatively consent to
            our use of your mobile phone number for calls and texts in order to perform and improve
            upon the Fishbox Platform. Fishbox will not assess any charges for calls or texts, but
            standard message charges or other charges from your wireless carrier may apply.
          </ContentWriting>
        </Section>
        <Section title={'8. Your Information'}>
          <ContentWriting>
            “Your Information” is defined as any information and materials you provide to Fishbox or
            other Users in connection with your registration for and use of the Fishbox Platform.
            You are solely responsible for Your Information, and we act merely as a passive conduit
            for your online distribution and publication of Your Information.
            <VSpace />
            You hereby represent and warrant to Fishbox that Your Information (a) will not be false,
            inaccurate, incomplete or misleading; (b) will not be fraudulent or involve the sale of
            counterfeit or stolen items; (c) will not infringe any third party's copyright, patent,
            trademark, trade secret or other proprietary right or rights of publicity or privacy;
            (d) will not violate any law, statute, ordinance, or regulation (including without
            limitation those governing export control, consumer protection, unfair competition,
            anti-discrimination or false advertising); (e) will not be defamatory, libelous,
            unlawfully threatening, or unlawfully harassing; (f) will not be obscene or contain
            child pornography or be harmful to minors; (g) will not contain any viruses, Trojan
            Horses, worms, time bombs, cancelbots or other computer programming routines that are
            intended to damage, detrimentally interfere with, surreptitiously intercept or
            expropriate any system, data or personal information; and (h) will not create liability
            for Fishbox or cause Fishbox to lose (in whole or in part) the services of its ISPs or
            other partners or suppliers. You hereby grant Fishbox a non-exclusive, worldwide,
            perpetual, irrevocable, royalty-free, sublicensable (through multiple tiers) right to
            exercise all copyright, publicity rights, and any other rights you have in Your
            Information, in any media now known or not currently known in order to perform and
            improve upon the Fishbox Platform.
          </ContentWriting>
        </Section>
        <Section title={'9. Worker Classification and Withholdings'}>
          <ContentWriting>
            AS SET FORTH IN SECTION 1, FISHBOX DOES NOT PERFORM DELIVERY SERVICES AND DOES NOT
            EMPLOY INDIVIDUALS TO PERFORM DELIVERY SERVICES. Users do not have authority to enter
            into written or oral — whether implied or express — contracts on behalf of Fishbox. Each
            User acknowledges that Fishbox does not, in any way, supervise, direct, or control a
            Fishbox Runner’s work or Services performed in any manner by a FIshbox Runner. Fishbox
            does not set a Fishbox Runner’s work hours or location of work. Fishbox will not provide
            any equipment, labor or materials needed for a particular Service. Fishbox does not
            provide any supervision to Users. The Fishbox Platform is not an employment service and
            Fishbox is not an employer of any User. As such, Fishbox is not responsible for and will
            not be liable for any tax payments or withholding, including but not limited to
            unemployment insurance, social security, disability insurance or any other applicable
            federal or state withholdings in connection with your use of Users’ Services. No agency,
            partnership, joint venture, employer-employee or franchiser-franchisee relationship is
            intended or created by this Agreement.
            <VSpace />
            You agree to indemnify, hold harmless and defend Fishbox from any and all claims that a
            Fishbox Runner was misclassified as an independent contractor, any liabilities arising
            from a determination by a court, arbitrator, government agency or other body that a
            Fishbox Runner was misclassified as an employee (including, but not limited to, taxes,
            penalties, interest and attorney’s fees), any claim that Fishbox was an employer or
            joint employer of a Fishbox Runner, any claims under any applicable employment-related
            laws, such as, without limitation, those relating to employment termination, employment
            discrimination, harassment or retaliation, as well as, without limitation, any claims
            for unpaid wages, withholdings, overtime pay, failure to provide meal and rest breaks,
            sick leave, holiday or vacation pay, retirement benefits, worker's compensation
            benefits, unemployment benefits, or any other employee benefits.
          </ContentWriting>
        </Section>
        <Section title={'10. Intellectual Property Rights'}>
          <ContentWriting>
            All text, graphics, editorial content, data, formatting, graphs, designs, HTML, look and
            feel, photographs, music, sounds, images, software, videos, designs, typefaces and other
            content (collectively “Proprietary Material”) that Users see or read through the Fishbox
            Platform is, as to between Fishbox and Users, owned by Fishbox. Proprietary Material is
            protected in all forms, media and technologies now known or hereinafter developed.
            Fishbox owns all Proprietary Material, as well as the coordination, selection,
            arrangement and enhancement of such Proprietary Materials as a Collective Work under the
            United States Copyright Act, as amended. Any other trademarks, service marks, logos
            and/or trade names appearing via the Fishbox Platform are the property of their
            respective owners. You may not copy or use any of these marks, logos or trade names
            without the express prior written consent of the owner.
          </ContentWriting>
        </Section>
        <Section title={'11. Disclaimer of Warranties'}>
          <ContentWriting>
            USE OF THE SERVICE IS ENTIRELY AT YOUR OWN RISK.
            <VSpace />
            THE FISHBOX PLATFORM IS PROVIDED ON AN “AS IS” BASIS WITHOUT WARRANTIES OF ANY KIND,
            EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. FISHBOX MAKES NO WARRANTIES OR
            REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE CONTENT PROVIDED THROUGH THE
            FISHBOX PLATFORM OR THE CONTENT OF ANY SITES LINKED TO THE FISHBOX PLATFORM AND ASSUMES
            NO LIABILITY OR RESPONSIBILITY FOR ANY (I) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT,
            (II) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR
            ACCESS TO AND USE OF THE FISHBOX PLATFORM, (III) ANY UNAUTHORIZED ACCESS TO OR USE OF
            OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION
            STORED THEREIN. FISHBOX DOES NOT WARRANT, ENDORSE, GUARANTEE OR ASSUME RESPONSIBILITY
            FOR ANY SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE FISHBOX PLATFORM OR
            ANY HYPERLINKED WEBSITE OR FEATURED IN ANY BANNER OR OTHER ADVERTISING AND FISHBOX WILL
            NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN
            YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES, OTHER THAN AS PROVIDED HEREIN. AS
            WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU
            SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
            <VSpace />
            WITHOUT LIMITING THE FOREGOING, NEITHER FISHBOX NOR ITS AFFILIATES OR LICENSORS WARRANT
            THAT ACCESS TO THE FISHBOX PLATFORM WILL BE UNINTERRUPTED OR THAT THE FISHBOX PLATFORM
            WILL BE ERROR-FREE; NOR DO THEY MAKE ANY WARRANTY AS TO THE RESULTS THAT MAY BE OBTAINED
            FROM THE USE OF THE FISHBOX PLATFORM, OR AS TO THE TIMELINESS, ACCURACY, RELIABILITY,
            COMPLETENESS OR CONTENT OF ANY SERVICE OR SERVICE, INFORMATION OR MATERIALS PROVIDED
            THROUGH OR IN CONNECTION WITH THE USE OF THE FISHBOX PLATFORM.
            <VSpace />
            NEITHER FISHBOX NOR ITS AFFILIATES OR LICENSORS IS RESPONSIBLE FOR THE CONDUCT, WHETHER
            ONLINE OR OFFLINE, OF ANY USER. NEITHER FISHBOX NOR ITS AFFILIATES OR LICENSORS WARRANT
            THAT THE FISHBOX PLATFORM IS FREE FROM VIRUSES, WORMS, TROJAN HORSES, OR OTHER HARMFUL
            COMPONENTS. FISHBOX AND ITS AFFILIATES AND LICENSORS CANNOT AND DO NOT GUARANTEE THAT
            ANY PERSONAL INFORMATION SUPPLIED BY YOU WILL NOT BE MISAPPROPRIATED, INTERCEPTED,
            DELETED, DESTROYED OR USED BY OTHERS.
          </ContentWriting>
        </Section>
        <Section title={'12. No Liability'}>
          <ContentWriting>
            YOU ACKNOWLEDGE AND AGREE THAT FISHBOX IS ONLY WILLING TO PROVIDE THE FISHBOX PLATFORM
            IF YOU AGREE TO CERTAIN LIMITATIONS OF OUR LIABILITY TO YOU AND THIRD PARTIES.
            THEREFORE, YOU AGREE NOT TO HOLD FISHBOX, ITS AFFILIATES, ITS LICENSORS, ITS PARTNERS IN
            PROMOTIONS, SWEEPSTAKES OR CONTESTS, OR ANY OF SUCH PARTIES’ AGENTS, EMPLOYEES,
            OFFICERS, DIRECTORS, CORPORATE PARTNERS, OR PARTICIPANTS LIABLE FOR ANY DAMAGE, SUITS,
            CLAIMS, AND/OR CONTROVERSIES (COLLECTIVELY, “LIABILITIES”) THAT HAVE ARISEN OR MAY
            ARISE, WHETHER KNOWN OR UNKNOWN, RELATING TO YOUR OR ANY OTHER PARTY’S USE OF OR
            INABILITY TO USE THE FISHBOX PLATFORM, INCLUDING WITHOUT LIMITATION ANY LIABILITIES
            ARISING IN CONNECTION WITH THE CONDUCT, ACT OR OMISSION OF ANY USER (INCLUDING WITHOUT
            LIMITATION STALKING, HARASSMENT THAT IS SEXUAL OR OTHERWISE, ACTS OF PHYSICAL VIOLENCE,
            AND DESTRUCTION OF PERSONAL PROPERTY), ANY DISPUTE WITH ANY USER, ANY INSTRUCTION,
            ADVICE, ACT, OR SERVICE PROVIDED BY FISHBOX OR ITS AFFILIATES OR LICENSORS AND ANY
            DESTRUCTION OF YOUR INFORMATION.
            <VSpace />
            UNDER NO CIRCUMSTANCES WILL FISHBOX, ITS AFFILIATES, ITS LICENSORS, OR ANY OF SUCH
            PARTIES’ AGENTS, EMPLOYEES, OFFICERS, DIRECTORS, CORPORATE PARTNERS, OR PARTICFIPANTS BE
            LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL OR EXEMPLARY DAMAGES
            ARISING IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE THE FISHBOX PLATFORM OR THE
            SERVICES, EVEN IF ADVISED OF THE POSSIBILITY OF THE SAME. SOME STATES DO NOT ALLOW THE
            EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATIONS
            MAY NOT APPLY TO YOU. FISHBOX DOES NOT ACCEPT ANY LIABILITY WITH RESPECT TO THE QUALITY
            OR FITNESS OF ANY WORK PERFORMED VIA THE FISHBOX PLATFORM. IF, NOTWITHSTANDING THE
            FOREGOING EXCLUSIONS, IT IS DETERMINED THAT FISHBOX OR ITS PARTNERS, AGENTS, EMPLOYEES,
            OFFICERS, DIRECTORS, CORPORATE PARTNERS, OR PARTICIPANTS IS LIABLE FOR DAMAGES, IN NO
            EVENT WILL THE AGGREGATE LIABILITY, WHETHER ARISING IN CONTRACT, TORT, STRICT LIABILITY
            OR OTHERWISE, EXCEED THE TOTAL FEES PAID BY YOU TO FISHBOX DURING THE SIX (6) MONTHS
            PRIOR TO THE TIME SUCH CLAIM AROSE.
          </ContentWriting>
        </Section>
        <Section title={'13. Indemnification'}>
          <ContentWriting>
            You hereby agree to indemnify, defend, and hold harmless Fishbox, its directors,
            officers, employees, managers, members, agents, licensors, attorneys, independent
            contractors, providers, subsidiaries, and affiliates from and against any and all claim,
            loss, expense or demand of liability, including attorneys' fees and costs incurred, in
            connection with (i) your use or inability to use the Fishbox Platform, or (ii) any
            content submitted by you or using your account to the Fishbox Platform, including, but
            not limited to the extent such content may infringe on the intellectual rights of a
            third party or otherwise be illegal or unlawful. Fishbox reserves the right, at its own
            expense, to assume the exclusive defense and control of any matter otherwise subject to
            your indemnification. You will not, in any event, settle any claim or matter without the
            written consent of Fishbox.
          </ContentWriting>
        </Section>
        <Section title={'14. Dispute Resolution'}>
          <ContentWriting>
            BINDING ARBITRATION. If you and Fishbox are unable to resolve a Dispute through informal
            negotiations, all claims arising from use of the Fishbox Platform (except those Disputes
            expressly excluded below) finally and exclusively resolved by binding arbitration. Any
            election to arbitrate by one party will be final and binding on the other. YOU
            UNDERSTAND THAT IF EITHER PARTY ELECTS TO ARBITRATE, NEITHER PARTY WILL HAVE THE RIGHT
            TO SUE IN COURT OR HAVE A JURY TRIAL. The arbitration will be commenced and conducted
            under the Commercial Arbitration Rules (the “AAA Rules”) of the American Arbitration
            Association (“AAA”) and, where appropriate, the AAA’s Supplementary Procedures for
            Consumer Related Disputes (“AAA Consumer Rules”), both of which are available at the AAA
            website www.adr.org. Your arbitration fees and your share of arbitrator compensation
            will be governed by the AAA Rules (and, where appropriate, limited by the AAA Consumer
            Rules). The arbitration may be conducted in person, through the submission of documents,
            by phone or online. The arbitrator will make a decision in writing, but need not provide
            a statement of reasons unless requested by a party. The arbitrator must follow
            applicable law, and any award may be challenged if the arbitrator fails to do so. Except
            as otherwise provided in this Agreement, you and Fishbox may litigate in court to compel
            arbitration, stay proceeding pending arbitration, or to confirm, modify, vacate or enter
            judgment on the award entered by the arbitrator.
            <VSpace />
            WAIVER OF RIGHT TO BE A PLAINTIFF OR CLASS MEMBER IN A PURPORTED CLASS ACTION OR
            REPRESENTATIVE PROCEEDING. You and Fishbox agree that any arbitration will be limited to
            the Dispute between Fishbox and you individually. YOU ACKNOWLEDGE AND AGREE THAT YOU AND
            FISHBOX ARE EACH WAIVING THE RIGHT TO PARTICFIPATE AS A PLAINTIFF OR CLASS MEMBER IN ANY
            PURPORTED CLASS ACTION OR REPRESENTATIVE PROCEEDING. Further, unless both you and
            Fishbox otherwise agree, the arbitrator may not consolidate more than one person’s
            claims, and may not otherwise preside over any form of any class or representative
            proceeding.
            <VSpace />
            LOCATION OF ARBITRATION. Arbitration will take place in Philadelphia County,
            Philadelphia. You and Fishbox agree that for any Dispute not subject to arbitration
            (other than claims proceeding in any small claims court), or where no election to
            arbitrate has been made, the state and Federal courts located in Philadelphia,
            Pennsylvania have exclusive jurisdiction and you and Fishbox agree to submit to the
            personal jurisdiction of such courts. Except as expressly provided otherwise, this
            Agreement will be governed by, and will be construed under, the laws of the Commonwealth
            of Pennsylvania, without regard to choice of law principles.
          </ContentWriting>
        </Section>
        <Section title={'15. General Provisions'}>
          <ContentWriting>
            Failure by Fishbox to enforce any provision(s) of this Agreement will not be construed
            as a waiver of any provision or right. This Agreement constitutes the entire agreement
            between you and Fishbox with respect to its subject matter. If any provision of this
            Agreement is found to be invalid or unenforceable, the remaining provisions will be
            enforced to the fullest extent possible, and the remaining provisions will remain in
            full force and effect. This Agreement may not be assigned or transferred by you without
            our prior written approval. We may assign or transfer this Agreement without your
            consent, including but not limited to assignments: (i) to a parent or subsidiary, (ii)
            to an acquirer of assets, or (iii) to any other successor or acquirer. Any assignment in
            violation of this section shall be null and void. This Agreement will inure to the
            benefit of Fishbox, its successors and assigns.
          </ContentWriting>
        </Section>
        <Section title={'16. Changes to this Agreement and the Fishbox Platform'}>
          <ContentWriting>
            Fishbox reserves the right, at its sole and absolute discretion, to change, modify, add
            to, supplement or delete any of the terms and conditions of this Agreement and review,
            improve, modify or discontinue, temporarily or permanently, the Fishbox Platform or any
            content or information through the Fishbox Platform at any time, effective with or
            without prior notice and without any liability to Fishbox. Fishbox will endeavor to
            notify you of these changes by email, but will not be liable for any failure to do so.
            If any future changes to this Agreement are unacceptable to you or cause you to no
            longer be in compliance with this Agreement, you must terminate, and immediately stop
            using, the Fishbox Platform. Your continued use of the Fishbox Platform following any
            revision to this Agreement constitutes your complete and irrevocable acceptance of any
            and all such changes. Fishbox may change, modify, suspend, or discontinue any aspect of
            the Fishbox Platform at any time without notice or liability. Fishbox may also impose
            limits on certain features or restrict your access to parts or all of the Fishbox
            Platform without notice or liability.
            <VSpace />
            BY CONTINUING TO USE THE SERVICE, I HEREBY ACKNOWLEDGE THAT I HAVE READ AND UNDERSTAND
            THE FOREGOING TERMS OF SERVICE, PRIVACY POLICY AND AGREE THAT MY USE OF THE FISHBOX
            PLATFORM IS AN ACKNOWLEDGMENT OF MY AGREEMENT TO BE BOUND BY THE TERMS AND CONDITIONS OF
            THIS AGREEMENT.
          </ContentWriting>
        </Section>
      </ScrollView>
    </SafeFullScreenLayout>
  )
}

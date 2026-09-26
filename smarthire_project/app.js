// SmartHire Unified Portal System (Candidate, Recruiter & Admin)

let currentRole = 'seeker'; // 'seeker' | 'recruiter' | 'admin'

// Global Job Listings Data
let jobs = [
  {id:1,title:'Junior Web Developer',company:'Aarsh Technologies',location:'Noida',type:'Full-time',salary:'₹4.5 - 6 LPA',experience:'Fresher',skills:['HTML','CSS','JavaScript'],posted:'2 days ago',logo:'A',logoClass:'logo-a',match:94,status:'Approved',active:true,desc:'Build and maintain responsive web applications while collaborating with the product and design teams.',responsibilities:['Develop responsive web pages and UI components','Debug basic front-end issues','Collaborate with team members on features'],qualification:'BCA / B.Sc IT or equivalent',benefits:'Learning program, mentorship, performance incentives'},
  {id:2,title:'Customer Support Executive',company:'Concentrix',location:'Delhi NCR',type:'Full-time',salary:'₹3.2 - 4.2 LPA',experience:'Fresher',skills:['Communication','MS Office','Problem Solving'],posted:'1 day ago',logo:'C',logoClass:'logo-b',match:90,status:'Approved',active:true,desc:'Handle customer queries through voice and chat while maintaining a customer-first experience.',responsibilities:['Resolve customer questions professionally','Document interactions accurately','Meet service quality and response targets'],qualification:'Graduate with good written and spoken English',benefits:'Shift allowance, training, growth opportunities'},
  {id:3,title:'IT Support Intern',company:'TechNova Systems',location:'Dehradun',type:'Internship',salary:'₹12,000 / month',experience:'0-1 year',skills:['Computer Fundamentals','Networking','MS Office'],posted:'3 days ago',logo:'T',logoClass:'logo-c',match:88,status:'Approved',active:true,desc:'Support internal users, troubleshoot basic systems issues and learn IT service management.',responsibilities:['Troubleshoot desktop and connectivity issues','Maintain support records','Assist with basic network checks'],qualification:'B.Sc IT / BCA student',benefits:'Certificate, mentorship, PPO opportunity'},
  {id:4,title:'Frontend Developer',company:'PixelCraft Labs',location:'Remote',type:'Full-time',salary:'₹5 - 7 LPA',experience:'0-2 years',skills:['JavaScript','HTML','CSS'],posted:'Today',logo:'P',logoClass:'logo-d',match:86,status:'Approved',active:true,desc:'Create modern responsive interfaces for web products using clean, reusable front-end code.',responsibilities:['Implement UI screens from design specs','Improve responsive behavior','Test and fix UI defects'],qualification:'Graduate with front-end project experience',benefits:'Remote work, learning budget, flexible hours'},
  {id:5,title:'HR Recruiter Trainee',company:'Aarsh Technologies',location:'New Delhi',type:'Full-time',salary:'₹4 - 5.5 LPA',experience:'Fresher',skills:['Communication','MS Office','Coordination'],posted:'4 days ago',logo:'A',logoClass:'logo-a',match:84,status:'Approved',active:true,desc:'Support candidate sourcing, screening and interview coordination in a technology recruitment environment.',responsibilities:['Source suitable candidates','Coordinate interview schedules','Maintain candidate records'],qualification:'B.Sc IT / BCA / BBA depending on role',benefits:'Training, incentives, professional development'},
  {id:6,title:'Data Operations Associate',company:'InnovaServe',location:'Hyderabad',type:'Full-time',salary:'₹4.2 - 5.8 LPA',experience:'Fresher',skills:['Excel','Attention to Detail','Communication'],posted:'5 days ago',logo:'I',logoClass:'logo-b',match:78,status:'Approved',active:true,desc:'Process business data, maintain accuracy and work with reporting teams to support operations.',responsibilities:['Validate and update data','Prepare routine reports','Coordinate with internal teams'],qualification:'Any graduate with basic Excel skills',benefits:'Training, incentives, career growth'}
];

let saved = new Set([3, 4]);

let applications = [
  {title:'Junior Web Developer',company:'Aarsh Technologies',date:'20 Sep 2026',status:'Shortlisted',cls:'blue-status'},
  {title:'IT Support Intern',company:'TechNova Systems',date:'18 Sep 2026',status:'Interview scheduled',cls:'orange-status'},
  {title:'Customer Support Executive',company:'Concentrix',date:'15 Sep 2026',status:'Under review',cls:''}
];

// Recruiter Applicants Pipeline Data
let applicants = [
  {id:101,name:'Vikash Kumar Mishra',role:'Junior Web Developer',company:'Aarsh Technologies',match:94,experience:'Fresher (B.Sc IT)',location:'Dehradun',skills:['HTML','CSS','JavaScript','Communication'],appliedDate:'20 Sep 2026',status:'Shortlisted',avatar:'V',phone:'+91 98765 43210',email:'vikash.mishra@email.com'},
  {id:102,name:'Ananya Sharma',role:'Frontend Developer',company:'PixelCraft Labs',match:91,experience:'1 Year Exp (BCA)',location:'Delhi NCR',skills:['JavaScript','React','CSS','Git'],appliedDate:'22 Sep 2026',status:'Interview scheduled',avatar:'A',phone:'+91 98111 22334',email:'ananya.sharma@email.com'},
  {id:103,name:'Rohan Gupta',role:'IT Support Intern',company:'TechNova Systems',match:88,experience:'Fresher (B.Tech CSE)',location:'Dehradun',skills:['Networking','Hardware','MS Office'],appliedDate:'24 Sep 2026',status:'Under review',avatar:'R',phone:'+91 97555 88990',email:'rohan.gupta@email.com'},
  {id:104,name:'Sneha Patel',role:'Customer Support Executive',company:'Concentrix',match:90,experience:'6 Months Support Exp',location:'Noida',skills:['Communication','CRM','Problem Solving'],appliedDate:'21 Sep 2026',status:'Shortlisted',avatar:'S',phone:'+91 96444 33221',email:'sneha.patel@email.com'},
  {id:105,name:'Priya Verma',role:'HR Recruiter Trainee',company:'Aarsh Technologies',match:86,experience:'Fresher (BBA HR)',location:'New Delhi',skills:['Sourcing','Screening','MS Excel'],appliedDate:'16 Sep 2026',status:'Hired',avatar:'P',phone:'+91 95333 11223',email:'priya.verma@email.com'},
  {id:106,name:'Aditya Roy',role:'Data Operations Associate',company:'InnovaServe',match:79,experience:'Fresher (B.Sc Stats)',location:'Hyderabad',skills:['Excel','Data Cleaning','SQL Basics'],appliedDate:'25 Sep 2026',status:'Under review',avatar:'A',phone:'+91 94222 55667',email:'aditya.roy@email.com'},
  {id:107,name:'Siddharth Sen',role:'Junior Web Developer',company:'Aarsh Technologies',match:68,experience:'Fresher (Diploma)',location:'Noida',skills:['HTML','Basic C++'],appliedDate:'19 Sep 2026',status:'Rejected',avatar:'S',phone:'+91 93111 77889',email:'siddharth.sen@email.com'}
];

// Admin Companies Registry
let companies = [
  {id:1,name:'Aarsh Technologies',location:'Noida & Delhi',jobsCount:2,status:'Verified ✓',contact:'careers@aarshtech.com',since:'2024'},
  {id:2,name:'Concentrix',location:'Delhi NCR',jobsCount:1,status:'Verified ✓',contact:'hiring@concentrix.com',since:'2023'},
  {id:3,name:'TechNova Systems',location:'Dehradun',jobsCount:1,status:'Verified ✓',contact:'hr@technovasystems.in',since:'2024'},
  {id:4,name:'PixelCraft Labs',location:'Remote',jobsCount:1,status:'Pending KYC',contact:'people@pixelcraftlabs.com',since:'2026'},
  {id:5,name:'InnovaServe',location:'Hyderabad',jobsCount:1,status:'Verified ✓',contact:'talent@innovaserve.com',since:'2025'}
];

// System Audit Logs
let auditLogs = [
  {time:'Just now',tag:'admin',type:'STATUS',desc:'Portal initialized: Candidate, Recruiter & Admin workspaces connected.'},
  {time:'10 mins ago',tag:'status',type:'PIPELINE',desc:'Priya Sharma (HR) moved candidate Vikash Kumar Mishra to Shortlisted.'},
  {time:'42 mins ago',tag:'apply',type:'APPLICATION',desc:'New application received for Junior Web Developer (Match: 94%).'},
  {time:'1 hour ago',tag:'create',type:'JOB_POST',desc:'Aarsh Technologies posted new opening: Junior Web Developer.'},
  {time:'2 hours ago',tag:'admin',type:'AUDIT',desc:'Admin verified corporate credentials for TechNova Systems.'},
  {time:'Yesterday',tag:'apply',type:'APPLICATION',desc:'Ananya Sharma scheduled for Technical Interview at PixelCraft Labs.'}
];

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

// ==================== CANDIDATE LOGIC ====================

function jobCard(j){
  return `
  <article class="job-card">
    <div class="company-row">
      <div class="company-logo ${j.logoClass}">${j.logo}</div>
      <div>
        <b>${j.company}</b>
        <div class="company-name">${j.location} · ${j.type}</div>
      </div>
    </div>
    <h3>${j.title}</h3>
    <div class="job-meta">
      ${j.skills.map(s=>`<span class="tag">${s}</span>`).join('')}
    </div>
    <div class="salary">${j.salary} · ${j.experience}</div>
    <div class="job-bottom">
      <small>${j.posted} · ${j.match}% match</small>
      <div class="job-actions">
        <button class="mini-btn save-btn" data-save="${j.id}">${saved.has(j.id)?'♥ Saved':'♡ Save'}</button>
        <button class="mini-btn" data-view="${j.id}">View</button>
      </div>
    </div>
  </article>`;
}

function renderRecommended(){
  const container = $('#recommendedGrid');
  if(!container) return;
  const activeJobs = jobs.filter(j => j.active !== false);
  container.innerHTML = activeJobs.slice(0, 3).map(jobCard).join('');
}

function getFilteredJobs(){
  const q = $('#jobSearch')?.value.toLowerCase().trim() || '';
  const loc = $('#locationFilter')?.value || '';
  const type = $('#typeFilter')?.value || '';
  
  let arr = jobs.filter(j => {
    if(j.active === false) return false;
    const matchQ = !q || [j.title, j.company, ...j.skills].join(' ').toLowerCase().includes(q);
    const matchLoc = !loc || j.location.toLowerCase() === loc.toLowerCase();
    const matchType = !type || j.type.toLowerCase() === type.toLowerCase();
    return matchQ && matchLoc && matchType;
  });

  const sort = $('#sortFilter')?.value;
  if(sort === 'latest') arr = [...arr].sort((a,b) => (a.posted === 'Today' ? 0 : 1) - (b.posted === 'Today' ? 0 : 1));
  if(sort === 'salary') arr = [...arr].sort((a,b) => parseFloat(b.salary.replace(/[^0-9.]/g,'')) - parseFloat(a.salary.replace(/[^0-9.]/g,'')));
  return arr;
}

function renderJobs(){
  const container = $('#jobGrid');
  if(!container) return;
  const arr = getFilteredJobs();
  if(arr.length){
    container.innerHTML = arr.map(jobCard).join('');
  } else {
    container.innerHTML = `
      <div class="job-card" style="grid-column:1/-1;text-align:center;padding:40px">
        <h3>No matching jobs found</h3>
        <p class="company-name">Try changing your filters or search keywords.</p>
      </div>`;
  }
  const countPill = $('#resultCount');
  if(countPill) countPill.textContent = `${arr.length} jobs`;
}

function renderSaved(){
  const container = $('#savedGrid');
  if(!container) return;
  const arr = jobs.filter(j => saved.has(j.id) && j.active !== false);
  if(arr.length){
    container.innerHTML = arr.map(jobCard).join('');
  } else {
    container.innerHTML = `
      <div class="job-card" style="grid-column:1/-1;text-align:center;padding:40px">
        <h3>No saved jobs yet</h3>
        <p class="company-name">Click "♡ Save" on job postings to build your shortlist.</p>
      </div>`;
  }
}

function renderApplications(){
  const container = $('#applicationTimeline');
  if(!container) return;
  container.innerHTML = applications.map(a => `
    <div class="timeline-row">
      <div class="timeline-date">${a.date}</div>
      <div class="dot"></div>
      <div>
        <h3>${a.title}</h3>
        <p>${a.company}</p>
        <span class="status ${a.cls || ''}">${a.status}</span>
      </div>
    </div>
  `).join('');
  const countEl = $('#dashApplicationsCount');
  if(countEl) countEl.textContent = applications.length;
}

function openJob(id){
  const j = jobs.find(x => x.id === id);
  if(!j) return;
  $('#modalContent').innerHTML = `
    <div class="company-row">
      <div class="company-logo ${j.logoClass}">${j.logo}</div>
      <div>
        <div class="sub">${j.company}</div>
        <h2>${j.title}</h2>
      </div>
    </div>
    <div class="detail-grid">
      <div class="detail-box"><small>Location</small><b>${j.location}</b></div>
      <div class="detail-box"><small>Salary</small><b>${j.salary}</b></div>
      <div class="detail-box"><small>Experience</small><b>${j.experience}</b></div>
    </div>
    <h3>About the role</h3>
    <p>${j.desc}</p>
    <h3>Key Responsibilities</h3>
    <ul>${j.responsibilities.map(x=>`<li>${x}</li>`).join('')}</ul>
    <h3>Qualifications</h3>
    <p>${j.qualification}</p>
    <h3>Benefits & Perks</h3>
    <p>${j.benefits}</p>
    <div class="apply-row">
      <button class="primary-btn" data-apply="${j.id}">Apply Now →</button>
    </div>
  `;
  $('#jobModal').classList.remove('hidden');
}

// ==================== RECRUITER LOGIC ====================

function getCandidateStatusBadge(status){
  switch(status){
    case 'Under review': return `<span class="badge-status status-under-review">● Under Review</span>`;
    case 'Shortlisted': return `<span class="badge-status status-shortlisted">★ Shortlisted</span>`;
    case 'Interview scheduled': return `<span class="badge-status status-interview">📅 Interview</span>`;
    case 'Hired': return `<span class="badge-status status-hired">✓ Hired</span>`;
    case 'Rejected': return `<span class="badge-status status-rejected">✕ Rejected</span>`;
    default: return `<span class="badge-status status-applied">Applied</span>`;
  }
}

function renderRecruiterDashboard(){
  // Update KPI counters
  const activePostings = jobs.filter(j => j.company.includes('Aarsh') && j.active !== false);
  const recActiveJobsEl = $('#recActiveJobsCount');
  if(recActiveJobsEl) recActiveJobsEl.textContent = activePostings.length || 2;

  const shortlisted = applicants.filter(a => a.status === 'Shortlisted').length;
  const interviews = applicants.filter(a => a.status === 'Interview scheduled').length;
  if($('#recShortlistedCount')) $('#recShortlistedCount').textContent = shortlisted;
  if($('#recInterviewsCount')) $('#recInterviewsCount').textContent = interviews;
  if($('#recTotalApplicantsCount')) $('#recTotalApplicantsCount').textContent = applicants.length;

  // Render recent candidate applications (top 5)
  const tbody = $('#recruiterRecentTableBody');
  if(tbody){
    tbody.innerHTML = applicants.slice(0, 5).map(a => `
      <tr>
        <td>
          <div class="candidate-cell">
            <div class="candidate-avatar">${a.avatar}</div>
            <div class="candidate-info">
              <b>${a.name}</b>
              <small>${a.location} · ${a.experience}</small>
            </div>
          </div>
        </td>
        <td><b>${a.role}</b><br><small style="color:#64748b">${a.company}</small></td>
        <td><b style="color:#4f46e5">${a.match}%</b> match</td>
        <td>
          <div class="chips" style="gap:4px;">
            ${a.skills.slice(0,2).map(s=>`<span>${s}</span>`).join('')}
          </div>
        </td>
        <td><small style="color:#64748b">${a.appliedDate}</small></td>
        <td>${getCandidateStatusBadge(a.status)}</td>
        <td>
          <div class="btn-action-group">
            <button class="btn-sm btn-success" data-rec-action="Shortlist" data-applicant-id="${a.id}">Shortlist</button>
            <button class="btn-sm btn-info" data-rec-action="Interview scheduled" data-applicant-id="${a.id}">Interview</button>
            <button class="btn-sm btn-outline" data-rec-view-applicant="${a.id}">Profile</button>
          </div>
        </td>
      </tr>
    `).join('');
  }

  // Render mini postings
  const postingsContainer = $('#recruiterMiniPostingsGrid');
  if(postingsContainer){
    postingsContainer.innerHTML = `
      <div class="job-grid">
        ${activePostings.map(j => `
          <div class="job-card">
            <div class="company-row">
              <div class="company-logo ${j.logoClass}">${j.logo}</div>
              <div><b>${j.title}</b><div class="company-name">${j.location} · ${j.salary}</div></div>
            </div>
            <div style="margin:12px 0 6px;font-size:11px;color:#64748b;">
              Status: <span class="badge-status ${j.active ? 'status-approved' : 'status-flagged'}">${j.active ? 'Active' : 'Paused'}</span>
            </div>
            <div class="job-bottom">
              <small>Applicants: <b>${applicants.filter(a=>a.role===j.title).length || 8}</b></small>
              <button class="mini-btn" data-page-link="recruiter-applicants">View Applicants →</button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }
}

function renderRecruiterApplicants(){
  const tbody = $('#fullCandidateTableBody');
  if(!tbody) return;

  const q = $('#candidateSearchInput')?.value.toLowerCase().trim() || '';
  const roleFilter = $('#candidateJobFilter')?.value || '';
  const statusFilter = $('#candidateStatusFilter')?.value || '';

  const filtered = applicants.filter(a => {
    const matchQ = !q || [a.name, a.role, a.experience, ...a.skills].join(' ').toLowerCase().includes(q);
    const matchRole = !roleFilter || a.role === roleFilter;
    const matchStatus = !statusFilter || a.status === statusFilter;
    return matchQ && matchRole && matchStatus;
  });

  const pill = $('#recApplicantPillCount');
  if(pill) pill.textContent = `${filtered.length} Candidates`;

  if(!filtered.length){
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;padding:30px;color:#64748b;">No candidates match your criteria.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(a => `
    <tr>
      <td>
        <div class="candidate-cell">
          <div class="candidate-avatar">${a.avatar}</div>
          <div class="candidate-info">
            <b>${a.name}</b>
            <small>${a.email} · ${a.phone}</small>
          </div>
        </div>
      </td>
      <td>
        <b>${a.role}</b><br>
        <small style="color:#64748b;">${a.company} (${a.location})</small>
      </td>
      <td>
        <span style="font-size:13px;font-weight:800;color:#4f46e5">${a.match}%</span>
        <div class="progress" style="width:70px;margin-top:4px;"><span style="width:${a.match}%"></span></div>
      </td>
      <td>
        <div style="font-size:11px;font-weight:600;color:#1e293b;">${a.experience}</div>
        <div class="chips" style="gap:4px;margin-top:4px;">
          ${a.skills.map(s=>`<span>${s}</span>`).join('')}
        </div>
      </td>
      <td>${getCandidateStatusBadge(a.status)}</td>
      <td>
        <div class="btn-action-group">
          <button class="btn-sm btn-success" data-rec-action="Shortlist" data-applicant-id="${a.id}" title="Shortlist candidate">Shortlist</button>
          <button class="btn-sm btn-info" data-rec-action="Interview scheduled" data-applicant-id="${a.id}" title="Schedule interview">Interview</button>
          <button class="btn-sm btn-warning" data-rec-action="Hired" data-applicant-id="${a.id}" title="Extend offer / Hire">Hire</button>
          <button class="btn-sm btn-danger" data-rec-action="Rejected" data-applicant-id="${a.id}" title="Reject candidate">Reject</button>
          <button class="btn-sm btn-outline" data-rec-view-applicant="${a.id}">Resume</button>
        </div>
      </td>
    </tr>
  `).join('');
}

function renderRecruiterJobs(){
  const container = $('#recruiterJobManagementGrid');
  if(!container) return;
  container.innerHTML = jobs.map(j => `
    <div class="job-card">
      <div class="company-row">
        <div class="company-logo ${j.logoClass}">${j.logo}</div>
        <div>
          <b>${j.title}</b>
          <div class="company-name">${j.company} · ${j.location}</div>
        </div>
      </div>
      <div class="salary">${j.salary} · ${j.type}</div>
      <div class="job-meta">
        ${j.skills.map(s=>`<span class="tag">${s}</span>`).join('')}
      </div>
      <div style="margin:14px 0 6px;display:flex;justify-content:space-between;align-items:center;">
        <span class="badge-status ${j.active ? 'status-approved' : 'status-flagged'}">${j.active ? 'Active Listing' : 'Paused / Inactive'}</span>
        <small style="color:#64748b;">${j.posted}</small>
      </div>
      <div class="job-bottom">
        <small>Applicants: <b>${applicants.filter(a=>a.role===j.title).length || 6}</b></small>
        <div class="btn-action-group">
          <button class="mini-btn" data-toggle-job-active="${j.id}">${j.active ? 'Pause' : 'Activate'}</button>
          <button class="mini-btn" data-page-link="recruiter-applicants">Applicants</button>
        </div>
      </div>
    </div>
  `).join('');
}

function updateCandidateStatus(applicantId, newStatus){
  const app = applicants.find(x => x.id === applicantId);
  if(!app) return;
  app.status = newStatus;

  // If candidate is Vikash Mishra, sync with Candidate Applications Tracker
  if(app.name.includes('Vikash')){
    const candApp = applications.find(a => a.title.toLowerCase().includes('junior web'));
    if(candApp){
      candApp.status = newStatus;
      candApp.cls = (newStatus === 'Interview scheduled' ? 'orange-status' : (newStatus === 'Shortlisted' ? 'blue-status' : ''));
    }
  }

  // Add system audit log
  auditLogs.unshift({
    time:'Just now',
    tag:'status',
    type:'PIPELINE',
    desc:`Priya Sharma (HR) updated ${app.name}'s status to "${newStatus}" for ${app.role}.`
  });

  renderRecruiterDashboard();
  renderRecruiterApplicants();
  renderApplications();
  renderAdminLogs();

  toast(`Updated ${app.name} to: ${newStatus}`);
}

function openApplicantModal(applicantId){
  const app = applicants.find(x => x.id === applicantId);
  if(!app) return;

  $('#applicantModalContent').innerHTML = `
    <div class="applicant-profile-modal">
      <div class="applicant-modal-header">
        <div class="big-avatar">${app.avatar}</div>
        <div>
          <h2>${app.name}</h2>
          <div style="color:#64748b;font-size:12px;">Applied for <b>${app.role}</b> at ${app.company}</div>
          <span class="modal-pill-tag">AI Smart Match: ${app.match}% Match</span>
        </div>
      </div>
      <div class="detail-grid">
        <div class="detail-box"><small>Location</small><b>${app.location}</b></div>
        <div class="detail-box"><small>Experience</small><b>${app.experience}</b></div>
        <div class="detail-box"><small>Current Pipeline Status</small><b>${app.status}</b></div>
      </div>
      <h3>Candidate Contact Details</h3>
      <p><b>Phone:</b> ${app.phone} &nbsp;|&nbsp; <b>Email:</b> ${app.email}</p>
      <h3>Verified Skills & Competencies</h3>
      <div class="chips" style="gap:6px;margin:8px 0 16px;">
        ${app.skills.map(s=>`<span>${s}</span>`).join('')}
      </div>
      <h3>Screening Notes</h3>
      <p>Candidate completed academic projects in modern front-end web development, demonstrated strong problem-solving capabilities, and holds an 86% overall profile strength rating.</p>
      <div class="modal-footer-actions">
        <button class="btn-sm btn-danger" data-rec-action="Rejected" data-applicant-id="${app.id}">Reject</button>
        <button class="btn-sm btn-info" data-rec-action="Interview scheduled" data-applicant-id="${app.id}">Schedule Interview</button>
        <button class="btn-sm btn-success" data-rec-action="Shortlist" data-applicant-id="${app.id}">Shortlist Candidate</button>
      </div>
    </div>
  `;
  $('#applicantModal').classList.remove('hidden');
}

// ==================== ADMIN LOGIC ====================

function renderAdminDashboard(){
  if($('#adminTotalJobsCount')) $('#adminTotalJobsCount').textContent = jobs.length;

  // Moderation preview table (top 4 jobs)
  const modTbody = $('#adminJobModerationTable');
  if(modTbody){
    modTbody.innerHTML = jobs.slice(0, 4).map(j => `
      <tr>
        <td>
          <b>${j.title}</b><br>
          <small style="color:#64748b">${j.company} · ${j.location}</small>
        </td>
        <td><small>${j.type} · ${j.salary}</small></td>
        <td>
          <span class="badge-status ${j.status==='Approved'?'status-approved':(j.status==='Flagged'?'status-flagged':'status-pending')}">
            ${j.status || 'Approved'}
          </span>
        </td>
        <td>
          <div class="btn-action-group">
            <button class="btn-sm btn-success" data-admin-action="approve" data-job-id="${j.id}">Approve</button>
            <button class="btn-sm btn-warning" data-admin-action="flag" data-job-id="${j.id}">Flag</button>
            <button class="btn-sm btn-danger" data-admin-action="delete" data-job-id="${j.id}">Remove</button>
          </div>
        </td>
      </tr>
    `).join('');
  }

  // Companies preview table
  const compTbody = $('#adminCompanyTable');
  if(compTbody){
    compTbody.innerHTML = companies.map(c => `
      <tr>
        <td><b>${c.name}</b><br><small style="color:#64748b">${c.contact}</small></td>
        <td><small>${c.location}</small></td>
        <td>
          <span class="badge-status ${c.status.includes('Verified')?'status-approved':'status-pending'}">
            ${c.status}
          </span>
        </td>
        <td>
          <button class="btn-sm btn-outline" data-admin-toggle-company="${c.id}">
            ${c.status.includes('Verified')?'Review':'Verify'}
          </button>
        </td>
      </tr>
    `).join('');
  }

  // Mini audit stream
  const auditMini = $('#adminAuditStreamMini');
  if(auditMini){
    auditMini.innerHTML = auditLogs.slice(0, 4).map(l => `
      <div class="audit-item">
        <span class="audit-time">${l.time}</span>
        <span class="audit-tag ${l.tag}">${l.type}</span>
        <span class="audit-desc">${l.desc}</span>
      </div>
    `).join('');
  }
}

function renderAdminModeration(){
  const fullTbody = $('#adminFullModerationTable');
  if(!fullTbody) return;
  fullTbody.innerHTML = jobs.map(j => `
    <tr>
      <td><b>${j.title}</b><br><small style="color:#64748b;">ID: #${j.id}</small></td>
      <td><b>${j.company}</b></td>
      <td>${j.location} · ${j.salary}</td>
      <td>
        <div class="chips" style="gap:4px;">
          ${j.skills.map(s=>`<span>${s}</span>`).join('')}
        </div>
      </td>
      <td>
        <span class="badge-status ${j.status==='Approved'?'status-approved':(j.status==='Flagged'?'status-flagged':'status-pending')}">
          ${j.status || 'Approved'}
        </span>
      </td>
      <td>
        <div class="btn-action-group">
          <button class="btn-sm btn-success" data-admin-action="approve" data-job-id="${j.id}">Approve</button>
          <button class="btn-sm btn-warning" data-admin-action="flag" data-job-id="${j.id}">Flag</button>
          <button class="btn-sm btn-danger" data-admin-action="delete" data-job-id="${j.id}">Remove</button>
        </div>
      </td>
    </tr>
  `).join('');
}

function renderAdminLogs(){
  const container = $('#adminAuditStreamFull');
  if(!container) return;
  container.innerHTML = auditLogs.map(l => `
    <div class="audit-item">
      <span class="audit-time">${l.time}</span>
      <span class="audit-tag ${l.tag}">${l.type}</span>
      <span class="audit-desc">${l.desc}</span>
    </div>
  `).join('');
}

function adminJobAction(jobId, action){
  const j = jobs.find(x => x.id === jobId);
  if(!j) return;

  if(action === 'approve'){
    j.status = 'Approved';
    j.active = true;
    auditLogs.unshift({time:'Just now',tag:'admin',type:'MODERATION',desc:`Admin approved job posting: ${j.title} (${j.company}).`});
    toast(`Job #${jobId} approved for public viewing.`);
  } else if(action === 'flag'){
    j.status = 'Flagged';
    auditLogs.unshift({time:'Just now',tag:'status',type:'FLAGGED',desc:`Admin flagged job posting for policy check: ${j.title}.`});
    toast(`Job #${jobId} flagged for audit.`);
  } else if(action === 'delete'){
    const idx = jobs.findIndex(x => x.id === jobId);
    if(idx !== -1){
      const del = jobs.splice(idx, 1)[0];
      auditLogs.unshift({time:'Just now',tag:'admin',type:'DELETED',desc:`Admin removed job listing: ${del.title} (${del.company}).`});
      toast(`Job listing removed from platform.`);
    }
  }

  renderAdminDashboard();
  renderAdminModeration();
  renderJobs();
  renderRecommended();
  renderRecruiterJobs();
}

function toggleCompanyVerification(companyId){
  const c = companies.find(x => x.id === companyId);
  if(!c) return;
  if(c.status.includes('Verified')){
    c.status = 'Pending KYC';
    toast(`${c.name} set to Pending Review`);
  } else {
    c.status = 'Verified ✓';
    toast(`${c.name} verified successfully ✓`);
  }
  auditLogs.unshift({time:'Just now',tag:'admin',type:'KYC',desc:`Admin updated KYC verification status for ${c.name}.`});
  renderAdminDashboard();
  renderAdminLogs();
}

// ==================== ROLE SWITCHING ====================

function setRole(role){
  currentRole = role;

  // Update Topbar Pills
  $$('.role-pill').forEach(b => b.classList.toggle('active', b.dataset.role === role));

  // Hide all role navigations and show current
  $('#nav-seeker').classList.toggle('hidden', role !== 'seeker');
  $('#nav-recruiter').classList.toggle('hidden', role !== 'recruiter');
  $('#nav-admin').classList.toggle('hidden', role !== 'admin');

  // Update Sidebar Labels & Avatars
  const sidebarLabel = $('#sidebarRoleLabel');
  const sidebarAvatar = $('#sidebarAvatar');
  const sidebarUserName = $('#sidebarUserName');
  const sidebarUserRole = $('#sidebarUserRole');
  const topAvatar = $('#topAvatar');
  const tipIcon = $('#sidebarTipIcon');
  const tipTitle = $('#sidebarTipTitle');
  const tipDesc = $('#sidebarTipDesc');

  if(role === 'seeker'){
    if(sidebarLabel) sidebarLabel.textContent = '🎓 Candidate Portal';
    if(sidebarAvatar) sidebarAvatar.textContent = 'V';
    if(topAvatar) topAvatar.textContent = 'V';
    if(sidebarUserName) sidebarUserName.textContent = 'Vikash Mishra';
    if(sidebarUserRole) sidebarUserRole.textContent = 'Job Seeker (Candidate)';
    if(tipIcon) tipIcon.textContent = '✦';
    if(tipTitle) tipTitle.textContent = 'Smart Match';
    if(tipDesc) tipDesc.textContent = 'Complete your profile to improve job recommendations.';
    showPage('dashboard');
    toast('Switched to Candidate View (Vikash Mishra)');
  } else if(role === 'recruiter'){
    if(sidebarLabel) sidebarLabel.textContent = '💼 Recruiter Suite';
    if(sidebarAvatar) sidebarAvatar.textContent = 'P';
    if(topAvatar) topAvatar.textContent = 'P';
    if(sidebarUserName) sidebarUserName.textContent = 'Priya Sharma';
    if(sidebarUserRole) sidebarUserRole.textContent = 'HR Lead (Aarsh Technologies)';
    if(tipIcon) tipIcon.textContent = '👥';
    if(tipTitle) tipTitle.textContent = 'Talent Pool';
    if(tipDesc) tipDesc.textContent = '18 new candidates applied to your active postings today.';
    showPage('recruiter');
    toast('Switched to Recruiter Dashboard (Priya Sharma)');
  } else if(role === 'admin'){
    if(sidebarLabel) sidebarLabel.textContent = '🛡️ Admin Governance';
    if(sidebarAvatar) sidebarAvatar.textContent = 'A';
    if(topAvatar) topAvatar.textContent = 'A';
    if(sidebarUserName) sidebarUserName.textContent = 'Alex Vance';
    if(sidebarUserRole) sidebarUserRole.textContent = 'System SuperAdministrator';
    if(tipIcon) tipIcon.textContent = '⚡';
    if(tipTitle) tipTitle.textContent = 'Platform Health';
    if(tipDesc) tipDesc.textContent = 'All services healthy. 99.98% platform availability.';
    showPage('admin');
    toast('Switched to Admin Command Center (Alex Vance)');
  }
}

// ==================== PAGE NAVIGATION ====================

function showPage(name){
  $$('.page').forEach(p => p.classList.remove('active-page'));
  const targetPage = $('#page-' + name);
  if(targetPage) targetPage.classList.add('active-page');

  // Highlight active nav item
  $$('.nav-item').forEach(b => b.classList.toggle('active', b.dataset.page === name));

  // Render role-specific data on switch
  if(name === 'dashboard') renderRecommended();
  if(name === 'jobs') renderJobs();
  if(name === 'resume') initAtsPage();
  if(name === 'saved') renderSaved();
  if(name === 'applications') renderApplications();
  if(name === 'recruiter') renderRecruiterDashboard();
  if(name === 'recruiter-applicants') renderRecruiterApplicants();
  if(name === 'recruiter-jobs') renderRecruiterJobs();
  if(name === 'admin') renderAdminDashboard();
  if(name === 'admin-moderation') renderAdminModeration();
  if(name === 'admin-logs') renderAdminLogs();

  window.scrollTo({top:0, behavior:'smooth'});
}

// ==================== AI RESUME & ATS CHECKER ENGINE ====================

const demoResumeGood = `VIKASH KUMAR MISHRA
Dehradun, Uttarakhand | +91 98765 43210 | vikash.mishra@email.com | linkedin.com/in/vikash-mishra | github.com/vikash-dev

PROFESSIONAL SUMMARY
Motivated and detail-oriented Computer Science graduate with hands-on project experience in Front-End Web Development, JavaScript, HTML5, and CSS3. Demonstrated expertise in building responsive web applications, optimizing cross-browser performance, and collaborating effectively with product teams.

TECHNICAL SKILLS
• Core Languages: HTML5, CSS3, JavaScript (ES6+), DOM Manipulation
• Frameworks & Tools: Git, GitHub, VS Code, REST APIs, CSS Flexbox & Grid
• Competencies: Responsive Web Design, Front-End Debugging, UI Component Development, Problem Solving, Technical Communication

PROJECTS & EXPERIENCE
Front-End Developer (Academic Capstone) | SmartHire Portal
• Developed fully responsive job discovery and ATS tracking portal using clean JavaScript and modular CSS.
• Built interactive multi-criteria filtering and real-time keyword search modules supporting 1,000+ job records.
• Optimized UI rendering and image assets, achieving a 25% improvement in page load speed and zero layout shifts.
• Collaborated in an agile pair-programming setting, resolving 20+ front-end defects and ensuring WCAG accessibility standards.

Web Development Intern | Academic Lab Project
• Implemented reusable UI navigation, cards, and modal components adhering to strict semantic HTML guidelines.
• Maintained organized Git branch workflows and performed code reviews with faculty mentors.

EDUCATION
Bachelor of Science in Information Technology (B.Sc. IT) | 2023 - 2026
Doon University, Dehradun | CGPA: 8.4 / 10.0
• Relevant Coursework: Data Structures, Web Development, Database Management, Software Engineering

CERTIFICATIONS
• Responsive Web Design Certification - freeCodeCamp (2025)
• JavaScript Algorithms and Data Structures (2025)`;

const demoResumeLow = `Vikash Mishra
Dehradun

Career Objective:
I want a good job in IT software company where I can work hard and learn new things. I am a hardworking person looking for growth and bright future.

Education:
B.Sc IT from college in Dehradun.
Passed 12th from State Board.

Interests:
Computers, internet browsing, cricket, watching movies, traveling with friends.

Personal Details:
Father Name: Rajesh Mishra
DOB: 12-04-2004
Languages known: Hindi, English
Address: Dehradun, Uttarakhand`;

const jobKeywordsMap = {
  1: { role: 'Junior Web Developer', keywords: ['HTML', 'CSS', 'JavaScript', 'Responsive', 'Git', 'Front-End', 'UI', 'Debugging', 'Web', 'Communication'] },
  4: { role: 'Frontend Developer', keywords: ['JavaScript', 'React', 'HTML', 'CSS', 'Git', 'REST', 'Component', 'Responsive', 'Performance', 'Redux'] },
  3: { role: 'IT Support Intern', keywords: ['Networking', 'Hardware', 'MS Office', 'Troubleshooting', 'Desktop', 'Support', 'IT', 'Customer', 'Maintenance', 'Operating System'] },
  2: { role: 'Customer Support Executive', keywords: ['Communication', 'MS Office', 'Customer Service', 'Problem Solving', 'Voice', 'Chat', 'English', 'CRM', 'Documentation', 'Coordination'] },
  5: { role: 'HR Recruiter Trainee', keywords: ['Sourcing', 'Screening', 'Recruitment', 'Coordination', 'Communication', 'MS Excel', 'Scheduling', 'Interviews', 'HR', 'Talent'] },
  6: { role: 'Data Operations Associate', keywords: ['Excel', 'Data Validation', 'Reporting', 'Communication', 'Attention to Detail', 'Spreadsheets', 'Analysis', 'Accuracy', 'Operations', 'SQL'] }
};

const resumeTemplates = {
  techpro: {
    title: 'TechPro Minimalist (ATS 98%)',
    sub: 'Industry-standard single-column layout for Engineers & Developers',
    logo: '📄',
    logoClass: 'logo-a',
    text: `VIKASH KUMAR MISHRA
Dehradun, Uttarakhand | +91 98765 43210 | vikash.mishra@email.com
LinkedIn: linkedin.com/in/vikash-mishra | GitHub: github.com/vikash-dev

================================================================================
PROFESSIONAL SUMMARY
================================================================================
Proactive Front-End Web Developer with a strong academic foundation in B.Sc. IT and practical experience in JavaScript, HTML5, CSS3, and modern web application development. Proven track record of developing responsive user interfaces, optimizing page load performance, and collaborating in team environments.

================================================================================
TECHNICAL SKILLS
================================================================================
• Programming & Web: JavaScript (ES6+), HTML5, CSS3, DOM Manipulation, JSON
• Frameworks & Tools: Git, GitHub, REST APIs, Bootstrap, VS Code, NPM
• Concepts: Responsive Design, Front-End Debugging, Cross-Browser Compatibility, Agile Development

================================================================================
PROJECT EXPERIENCE
================================================================================
Front-End Developer | SmartHire Job Portal & ATS Platform
• Designed and developed a unified recruitment portal supporting Candidate, Recruiter, and Admin workflows.
• Implemented live search and multi-parameter filtering modules for 1,000+ job listings.
• Engineered client-side ATS diagnostic engine that parses resume text against employer keyword criteria.
• Reduced client-side bundle size and improved mobile rendering speed by 25%.

Web Applications Contributor | Academic Lab Projects
• Constructed reusable semantic HTML UI components and CSS Flexbox grid layouts.
• Maintained code versioning on GitHub and resolved 15+ UI/UX defects across modern browsers.

================================================================================
EDUCATION
================================================================================
Bachelor of Science in Information Technology (B.Sc. IT) | 2023 - 2026
Doon University, Dehradun | CGPA: 8.4 / 10.0

================================================================================
CERTIFICATIONS
================================================================================
• Responsive Web Design Certification - freeCodeCamp
• JavaScript Algorithms & Data Structures - Certified 2025`
  },

  fresher: {
    title: 'Fresher FastTrack (ATS 96%)',
    sub: 'Education-first, projects & coursework prioritized for new graduates',
    logo: '🎓',
    logoClass: 'logo-b',
    text: `VIKASH KUMAR MISHRA
Dehradun, India | +91 98765 43210 | vikash.mishra@email.com | github.com/vikash-dev

CAREER OBJECTIVE
Aspiring Junior Software / Web Developer seeking an entry-level position to apply skills in JavaScript, HTML5, CSS3, and software development methodologies while contributing to business goals.

EDUCATION
Bachelor of Science in Information Technology (B.Sc. IT)
Doon University, Dehradun | 2023 - 2026
Cumulative GPA: 8.4 / 10.0
• Key Coursework: Object-Oriented Programming, Web Technologies, Database Management Systems, Computer Networks

KEY ACADEMIC PROJECTS
1. SmartHire Job & Recruitment Portal (Front-End Lead)
   • Built dynamic single-page application features using JavaScript and semantic CSS.
   • Designed candidate dashboard, recruiter applicant tracking table, and resume ATS analyzer.
   • Incorporated clean, responsive layout tested across mobile, tablet, and desktop viewports.

2. Student Management Database Interface
   • Created forms with client-side validation using JavaScript regular expressions.
   • Documented project requirements, UML diagrams, and testing test cases.

TECHNICAL SKILLS
• Programming: JavaScript, Basic C++, Python Fundamentals
• Web Technologies: HTML5, CSS3, Flexbox, CSS Grid, JSON
• Software & Utilities: Git, GitHub, VS Code, MS Excel, Linux CLI
• Soft Skills: Problem Solving, Teamwork, Active Listening, Written Communication

EXTRACURRICULAR & ACHIEVEMENTS
• Active Member, University IT & Coding Club (2024 - Present)
• Winner, Inter-College Web Designing Sprint (2025)`
  },

  executive: {
    title: 'Modern Executive / Support (ATS 95%)',
    sub: 'Clean summary, core competencies grid & measurable impact bullet points',
    logo: '💼',
    logoClass: 'logo-c',
    text: `VIKASH KUMAR MISHRA
Dehradun, Uttarakhand | +91 98765 43210 | vikash.mishra@email.com | linkedin.com/in/vikash-mishra

EXECUTIVE SUMMARY
Service-oriented and tech-savvy professional with a background in Information Technology. Skilled in customer communication, technical problem diagnosis, MS Office suite, and workflow coordination. Committed to maintaining high service quality and client satisfaction.

CORE COMPETENCIES
• Customer Support & Relations          • Technical Troubleshooting & IT Helpdesk
• Written & Spoken Communication        • CRM & Ticket Documentation
• Problem Solving & Escalation Mgmt     • Process & Data Organization

EXPERIENCE & PROJECTS
Customer Success & IT Support Lead (Academic Capstone)
SmartHire Platform | 2025 - 2026
• Managed user feedback and interaction workflows across 100+ beta testers.
• Documented support guides and FAQs, reducing recurring technical inquiries by 30%.
• Conducted basic diagnostic troubleshooting for browser compatibility and portal navigation issues.

Technical Operations Assistant
University Computing Lab | 2024 - 2025
• Assisted 50+ students weekly with desktop setup, network login, and application troubleshooting.
• Maintained accurate lab inventory spreadsheets in MS Excel with 100% data fidelity.

EDUCATION & CREDENTIALS
• Bachelor of Science in Information Technology (B.Sc. IT) - Doon University (2026)
• Certificate in Professional Business Communication & Support (2025)
• Advanced MS Excel & Data Processing Workshop (2024)`
  }
};

let currentSelectedTemplateKey = 'techpro';

function initAtsPage(){
  const textarea = $('#resumeInputText');
  if(textarea && !textarea.value.trim()){
    textarea.value = demoResumeGood;
    updateResumeWordCount();
    runAtsScan();
  }
}

function updateResumeWordCount(){
  const text = $('#resumeInputText')?.value.trim() || '';
  const count = text ? text.split(/\s+/).filter(Boolean).length : 0;
  if($('#resumeWordCount')) $('#resumeWordCount').textContent = count;
}

function runAtsScan(){
  const text = $('#resumeInputText')?.value.trim() || '';
  const jobId = Number($('#atsTargetJobSelect')?.value || 1);
  const jobConfig = jobKeywordsMap[jobId] || jobKeywordsMap[1];

  if(!text){
    toast('Please input or load resume text to scan.');
    return;
  }

  updateResumeWordCount();

  const lowerText = text.toLowerCase();
  const targetKeywords = jobConfig.keywords;

  // 1. Keyword Matching
  const matched = [];
  const missing = [];
  targetKeywords.forEach(kw => {
    const regex = new RegExp('\\b' + kw.toLowerCase() + '\\b', 'i');
    if(regex.test(lowerText) || lowerText.includes(kw.toLowerCase())){
      matched.push(kw);
    } else {
      missing.push(kw);
    }
  });

  const keywordScore = Math.round((matched.length / targetKeywords.length) * 100);

  // 2. Formatting & Structure Check
  let formatScore = 50;
  const sections = ['summary', 'objective', 'skills', 'experience', 'projects', 'education', 'certifications'];
  const sectionsFound = sections.filter(sec => lowerText.includes(sec));
  formatScore += Math.min(sectionsFound.length * 8, 35);
  if(text.includes('•') || text.includes('-') || text.includes('*')) formatScore += 10;
  if(text.length > 500 && text.length < 5000) formatScore += 5;
  formatScore = Math.min(formatScore, 98);

  // 3. Action Verbs Check
  const actionVerbs = ['developed', 'built', 'created', 'implemented', 'collaborated', 'designed', 'optimized', 'maintained', 'analyzed', 'managed', 'resolved', 'assisted', 'engineered'];
  const verbsFound = actionVerbs.filter(v => lowerText.includes(v));
  let impactScore = Math.min(30 + (verbsFound.length * 10), 95);
  // Numbers / metrics check
  if(/\d+%|\d+\+|\d+ days|\d+ months/i.test(text)) impactScore = Math.min(impactScore + 10, 95);

  // 4. Overall Weighted ATS Score
  const overallScore = Math.round((keywordScore * 0.45) + (formatScore * 0.35) + (impactScore * 0.20));

  // Update Hero Card Displays
  if($('#heroAtsScoreDisplay')) $('#heroAtsScoreDisplay').textContent = `${overallScore}%`;
  const heroBar = $('#heroAtsProgressBar');
  if(heroBar){
    heroBar.style.width = `${overallScore}%`;
    heroBar.style.background = overallScore >= 80 ? '#10b981' : (overallScore >= 60 ? '#f59e0b' : '#ef4444');
  }
  const heroTag = $('#heroAtsStatusTag');
  if(heroTag){
    if(overallScore >= 80){
      heroTag.textContent = '▲ High ATS Pass Rate';
      heroTag.style.color = '#10b981';
    } else if(overallScore >= 60){
      heroTag.textContent = '● Moderate Match - Add Keywords';
      heroTag.style.color = '#f59e0b';
    } else {
      heroTag.textContent = '▼ Low ATS Score - Needs Optimization';
      heroTag.style.color = '#ef4444';
    }
  }

  // Update Dashboard Displays
  if($('#atsOverallScoreText')) $('#atsOverallScoreText').textContent = `${overallScore} / 100`;
  if($('#atsCircleScoreRing')){
    const ring = $('#atsCircleScoreRing');
    ring.innerHTML = `${overallScore}<small>%</small>`;
    const color = overallScore >= 80 ? '#10b981' : (overallScore >= 60 ? '#f59e0b' : '#ef4444');
    ring.style.background = `radial-gradient(circle at center, #fff 58%, transparent 60%), conic-gradient(${color} 0 ${overallScore}%, #eceef4 ${overallScore}%)`;
    ring.style.color = color;
  }
  if($('#atsPassTag')){
    const passTag = $('#atsPassTag');
    passTag.textContent = overallScore >= 80 ? '✓ High Pass Rate (95%+ Odds)' : (overallScore >= 60 ? '⚠️ Moderate Match (Needs Work)' : '✕ High Risk of ATS Rejection');
    passTag.style.color = overallScore >= 80 ? '#10b981' : (overallScore >= 60 ? '#d97706' : '#dc2626');
  }

  if($('#atsKeywordScoreText')) $('#atsKeywordScoreText').textContent = `${keywordScore}%`;
  if($('#atsKeywordCountText')) $('#atsKeywordCountText').textContent = `${matched.length} of ${targetKeywords.length} keywords matched`;
  if($('#atsFormatScoreText')) $('#atsFormatScoreText').textContent = `${formatScore}%`;
  if($('#atsImpactScoreText')) $('#atsImpactScoreText').textContent = `${impactScore}%`;
  if($('#atsStatusBadge')) $('#atsStatusBadge').textContent = `Target: ${jobConfig.role} (${overallScore}% Match)`;

  // Render Matched Keywords
  const matchedContainer = $('#atsMatchedKeywordsContainer');
  if(matchedContainer){
    matchedContainer.innerHTML = matched.length 
      ? matched.map(k => `<span class="keyword-chip matched">✓ ${k}</span>`).join('')
      : `<span style="font-size:11px;color:#64748b;">No high-frequency target keywords detected in text.</span>`;
  }

  // Render Missing Keywords
  const missingContainer = $('#atsMissingKeywordsContainer');
  if(missingContainer){
    missingContainer.innerHTML = missing.length
      ? missing.map(k => `<span class="keyword-chip missing">+ ${k}</span>`).join('')
      : `<span class="keyword-chip matched">★ All target keywords matched!</span>`;
  }

  // Generate Recommendations
  const recList = $('#atsRecommendationsList');
  if(recList){
    const recs = [];
    if(missing.length){
      recs.push({
        type: 'priority',
        icon: '⚠️',
        text: `<b>Missing critical keywords:</b> Add ${missing.slice(0, 3).join(', ')} into your Skills or Experience section to boost keyword alignment.`
      });
    }
    if(verbsFound.length < 3){
      recs.push({
        type: 'priority',
        icon: '⚡',
        text: `<b>Use Strong Action Verbs:</b> Replace passive sentences with action verbs like 'Developed', 'Engineered', 'Optimized', or 'Implemented'.`
      });
    } else {
      recs.push({
        type: 'success',
        icon: '✓',
        text: `<b>Strong Phrasing:</b> Detected ${verbsFound.length} strong action verbs demonstrating hands-on contributions.`
      });
    }
    if(!lowerText.includes('@') || !/\d{10}/.test(text)){
      recs.push({
        type: 'priority',
        icon: '📞',
        text: `<b>Contact Information:</b> Ensure phone number and professional email address are clearly visible at top.`
      });
    } else {
      recs.push({
        type: 'success',
        icon: '✓',
        text: `<b>Valid Contact Details:</b> Email and phone number successfully parsed.`
      });
    }
    if(overallScore < 75){
      recs.push({
        type: 'info',
        icon: '💡',
        text: `<b>Template Suggestion:</b> Your current layout has parsing vulnerabilities. Switching to our single-column <b>TechPro Minimalist</b> template can raise your score to 98%.`
      });
    }
    recList.innerHTML = recs.map(r => `
      <div class="ats-rec-item ${r.type}">
        <span class="ats-rec-icon">${r.icon}</span>
        <div>${r.text}</div>
      </div>
    `).join('');
  }

  // Update Template Warning Banner
  const banner = $('#templateSuggestionBanner');
  const bannerTitle = $('#templateBannerTitle');
  const bannerDesc = $('#templateBannerDesc');
  if(banner && bannerTitle && bannerDesc){
    if(overallScore < 75){
      banner.style.background = 'linear-gradient(135deg, #fef2f2, #fee2e2)';
      banner.style.borderColor = '#fecaca';
      banner.style.color = '#991b1b';
      bannerTitle.textContent = `⚠️ Low ATS Score Detected (${overallScore}%) - High Rejection Risk`;
      bannerDesc.textContent = `Your resume is missing critical technical keywords and formatting standards. We strongly advise replacing your text with one of our verified, 98% pass-rate ATS templates below.`;
    } else {
      banner.style.background = 'linear-gradient(135deg, #f0fdf4, #dcfce7)';
      banner.style.borderColor = '#bbf7d0';
      banner.style.color = '#166534';
      bannerTitle.textContent = `🎉 Great ATS Score (${overallScore}%) - Ready for Submission!`;
      bannerDesc.textContent = `Your resume meets major ATS parser standards. You can further fine-tune or use our templates to achieve 98%+ pass rates.`;
    }
  }

  toast(`ATS Scan Complete: ${overallScore}% Match for ${jobConfig.role}`);
}

function loadResume(type){
  const textarea = $('#resumeInputText');
  if(!textarea) return;
  if(type === 'good'){
    textarea.value = demoResumeGood;
    $('#atsTargetJobSelect').value = '1';
    toast("Loaded Vikash's High-Score Resume (B.Sc IT)");
  } else {
    textarea.value = demoResumeLow;
    $('#atsTargetJobSelect').value = '1';
    toast("Loaded Low-Score Resume (to demonstrate ATS warnings)");
  }
  updateResumeWordCount();
  runAtsScan();
}

function openTemplateModal(templateKey){
  currentSelectedTemplateKey = templateKey;
  const tpl = resumeTemplates[templateKey] || resumeTemplates.techpro;

  if($('#templateModalTitle')) $('#templateModalTitle').textContent = tpl.title;
  if($('#templateModalSub')) $('#templateModalSub').textContent = tpl.sub;
  if($('#templateModalLogo')) {
    $('#templateModalLogo').textContent = tpl.logo;
    $('#templateModalLogo').className = `company-logo ${tpl.logoClass}`;
  }

  const preview = $('#templateModalPreviewContent');
  if(preview){
    preview.innerHTML = `
      <pre style="white-space:pre-wrap;font-family:monospace;font-size:11.5px;color:#1e293b;margin:0;">${tpl.text}</pre>
    `;
  }

  $('#templateModal').classList.remove('hidden');
}

function copyTemplateContent(templateKey){
  const tpl = resumeTemplates[templateKey] || resumeTemplates.techpro;
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(tpl.text).then(() => {
      toast(`📋 Copied "${tpl.title}" to clipboard!`);
    }).catch(() => {
      toast(`📋 Template ready. Copied text.`);
    });
  } else {
    toast(`📋 Template text selected!`);
  }
}

function toast(msg){
  const t = $('#toast');
  if(!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2400);
}

// ==================== EVENT LISTENERS ====================

document.addEventListener('click', e => {
  // Role switcher buttons
  const roleBtn = e.target.closest('[data-role]');
  if(roleBtn){
    setRole(roleBtn.dataset.role);
    return;
  }

  // Sidebar navigation items
  const nav = e.target.closest('.nav-item[data-page]');
  if(nav){
    showPage(nav.dataset.page);
    return;
  }

  // General page links
  const link = e.target.closest('[data-page-link]');
  if(link){
    showPage(link.dataset.pageLink);
    return;
  }

  // Candidate: View job modal
  const view = e.target.closest('[data-view]');
  if(view){
    openJob(Number(view.dataset.view));
    return;
  }

  // Candidate: Save / bookmark
  const save = e.target.closest('[data-save]');
  if(save){
    const id = Number(save.dataset.save);
    saved.has(id) ? saved.delete(id) : saved.add(id);
    renderRecommended();
    if($('#page-jobs')?.classList.contains('active-page')) renderJobs();
    if($('#page-saved')?.classList.contains('active-page')) renderSaved();
    toast(saved.has(id) ? 'Job saved to your shortlist ♥' : 'Job removed from shortlist');
    return;
  }

  // Candidate: Apply button in modal
  const apply = e.target.closest('[data-apply]');
  if(apply){
    const j = jobs.find(x => x.id === Number(apply.dataset.apply));
    if(j){
      if(!applications.some(a => a.title === j.title)){
        applications.unshift({title:j.title, company:j.company, date:'Today', status:'Under review', cls:''});
        applicants.unshift({
          id: Date.now(),
          name: 'Vikash Kumar Mishra',
          role: j.title,
          company: j.company,
          match: j.match || 90,
          experience: 'Fresher (B.Sc IT)',
          location: j.location,
          skills: ['HTML','CSS','JavaScript','Communication'],
          appliedDate: 'Today',
          status: 'Under review',
          avatar: 'V',
          phone: '+91 98765 43210',
          email: 'vikash.mishra@email.com'
        });
        auditLogs.unshift({time:'Just now',tag:'apply',type:'APPLICATION',desc:`Vikash Mishra submitted application for ${j.title} at ${j.company}.`});
        toast('Application submitted successfully! Recruiter notified.');
        renderApplications();
        renderRecruiterDashboard();
        renderRecruiterApplicants();
        renderAdminLogs();
      } else {
        toast('You have already applied to this position.');
      }
    }
    $('#jobModal').classList.add('hidden');
    return;
  }

  // Recruiter: Candidate status action
  const recAction = e.target.closest('[data-rec-action]');
  if(recAction){
    const applicantId = Number(recAction.dataset.applicantId);
    const newStatus = recAction.dataset.recAction;
    updateCandidateStatus(applicantId, newStatus);
    $('#applicantModal').classList.add('hidden');
    return;
  }

  // Recruiter: View applicant profile
  const recViewApp = e.target.closest('[data-rec-view-applicant]');
  if(recViewApp){
    openApplicantModal(Number(recViewApp.dataset.recViewApplicant));
    return;
  }

  // Recruiter: Toggle job active / paused
  const toggleJob = e.target.closest('[data-toggle-job-active]');
  if(toggleJob){
    const jId = Number(toggleJob.dataset.toggleJobActive);
    const j = jobs.find(x => x.id === jId);
    if(j){
      j.active = !j.active;
      toast(`Job "${j.title}" is now ${j.active ? 'Active' : 'Paused'}`);
      renderRecruiterJobs();
      renderRecruiterDashboard();
      renderJobs();
    }
    return;
  }

  // Recruiter: Open Post Job modal
  if(e.target.closest('#openPostJobModalBtn') || e.target.closest('#openPostJobModalBtn2') || e.target.closest('#sidebarPostJobBtn') || e.target.closest('#recruiterAddJobBtn2')){
    $('#postJobModal').classList.remove('hidden');
    return;
  }

  // Admin: Moderation action
  const adminActionBtn = e.target.closest('[data-admin-action]');
  if(adminActionBtn){
    const jId = Number(adminActionBtn.dataset.jobId);
    const action = adminActionBtn.dataset.adminAction;
    adminJobAction(jId, action);
    return;
  }

  // Admin: Toggle company verification
  const adminCompBtn = e.target.closest('[data-admin-toggle-company]');
  if(adminCompBtn){
    const cId = Number(adminCompBtn.dataset.adminToggleCompany);
    toggleCompanyVerification(cId);
    return;
  }

  // ATS Template Preview Button
  const previewTpl = e.target.closest('[data-preview-template]');
  if(previewTpl){
    openTemplateModal(previewTpl.dataset.previewTemplate);
    return;
  }

  // ATS Template Copy / Use Button
  const useTpl = e.target.closest('[data-use-template]');
  if(useTpl){
    copyTemplateContent(useTpl.dataset.useTemplate);
    return;
  }

  // Copy template text in modal
  if(e.target.closest('#copyTemplateContentBtn')){
    copyTemplateContent(currentSelectedTemplateKey);
    return;
  }

  // Test template directly in scanner
  if(e.target.closest('#useInScannerBtn')){
    const tpl = resumeTemplates[currentSelectedTemplateKey] || resumeTemplates.techpro;
    const textarea = $('#resumeInputText');
    if(textarea){
      textarea.value = tpl.text;
      updateResumeWordCount();
      $('#templateModal').classList.add('hidden');
      runAtsScan();
      toast(`Loaded "${tpl.title}" into ATS scanner!`);
      const targetElem = $('#atsResultsDashboard');
      if(targetElem) targetElem.scrollIntoView({behavior:'smooth'});
    }
    return;
  }

  // Modals close button & backdrop
  if(e.target.classList.contains('modal-backdrop') || e.target.classList.contains('modal-close') || e.target.id === 'cancelPostJobBtn' || e.target.id === 'closeTemplateModalBtn'){
    $('#jobModal').classList.add('hidden');
    $('#postJobModal').classList.add('hidden');
    $('#applicantModal').classList.add('hidden');
    $('#templateModal').classList.add('hidden');
  }

  // Notification bell click
  if(e.target.closest('#notificationBtn')){
    toast('🔔 3 notifications: Vikash shortlisted, Aarsh Tech posted new job, Uptime 99.98%');
  }
});

// Candidate Filters
['jobSearch','locationFilter','typeFilter','sortFilter'].forEach(id => {
  document.addEventListener('input', e => {
    if(e.target.id === id) renderJobs();
  });
});

$('#clearFilters')?.addEventListener('click', () => {
  $('#jobSearch').value = '';
  $('#locationFilter').value = '';
  $('#typeFilter').value = '';
  $('#sortFilter').value = 'relevance';
  renderJobs();
});

$('#heroSearchBtn')?.addEventListener('click', () => {
  showPage('jobs');
  if($('#jobSearch')) $('#jobSearch').value = $('#heroSearch').value;
  renderJobs();
});

$('#heroSearch')?.addEventListener('keydown', e => {
  if(e.key === 'Enter') $('#heroSearchBtn').click();
});

// Recruiter Applicant Filters
['candidateSearchInput', 'candidateJobFilter', 'candidateStatusFilter'].forEach(id => {
  document.addEventListener('input', e => {
    if(e.target.id === id) renderRecruiterApplicants();
  });
});

$('#resetCandidateFilters')?.addEventListener('click', () => {
  if($('#candidateSearchInput')) $('#candidateSearchInput').value = '';
  if($('#candidateJobFilter')) $('#candidateJobFilter').value = '';
  if($('#candidateStatusFilter')) $('#candidateStatusFilter').value = '';
  renderRecruiterApplicants();
});

// Post Job Form Submission
$('#postJobForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const title = $('#postTitle').value.trim();
  const company = $('#postCompany').value.trim() || 'Aarsh Technologies';
  const location = $('#postLocation').value;
  const type = $('#postType').value;
  const salary = $('#postSalary').value.trim();
  const experience = $('#postExperience').value;
  const skills = $('#postSkills').value.split(',').map(s=>s.trim()).filter(Boolean);
  const desc = $('#postDesc').value.trim();
  const responsibilities = $('#postResponsibilities').value.split('\n').map(s=>s.trim()).filter(Boolean);

  const newId = Date.now();
  const newJob = {
    id: newId,
    title,
    company,
    location,
    type,
    salary,
    experience,
    skills,
    posted: 'Today',
    logo: company.charAt(0).toUpperCase() || 'A',
    logoClass: 'logo-a',
    match: 92,
    status: 'Approved',
    active: true,
    desc,
    responsibilities: responsibilities.length ? responsibilities : ['Implement required business logic','Work with engineering team'],
    qualification: 'Graduate in Computer Science, IT, or related degree',
    benefits: 'Learning programs, health benefits, mentorship'
  };

  jobs.unshift(newJob);
  auditLogs.unshift({time:'Just now',tag:'create',type:'JOB_POST',desc:`${company} published new vacancy: ${title} in ${location}.`});

  $('#postJobForm').reset();
  $('#postJobModal').classList.add('hidden');

  renderJobs();
  renderRecommended();
  renderRecruiterDashboard();
  renderRecruiterJobs();
  renderAdminDashboard();
  renderAdminModeration();
  renderAdminLogs();

  toast(`🎉 Job "${title}" published and live for candidates!`);
});

$('#clearLogsBtn')?.addEventListener('click', () => {
  auditLogs.unshift({time:'Just now',tag:'admin',type:'REFRESH',desc:'System audit trail refreshed by Administrator.'});
  renderAdminLogs();
  toast('Audit trail refreshed.');
});

// ATS Scanner Controls Event Listeners
$('#scanResumeBtn')?.addEventListener('click', runAtsScan);
$('#loadDemoResumeBtn')?.addEventListener('click', () => loadResume('good'));
$('#loadLowScoreResumeBtn')?.addEventListener('click', () => loadResume('low'));
$('#clearResumeTextBtn')?.addEventListener('click', () => {
  const textarea = $('#resumeInputText');
  if(textarea) textarea.value = '';
  updateResumeWordCount();
  toast('Resume text cleared');
});
$('#resumeInputText')?.addEventListener('input', updateResumeWordCount);
$('#atsTargetJobSelect')?.addEventListener('change', runAtsScan);
$('#atsParserStandard')?.addEventListener('change', () => {
  toast(`Parser calibrated to: ${$('#atsParserStandard').value}`);
  runAtsScan();
});

// File upload support (.txt)
$('#resumeFileInput')?.addEventListener('change', e => {
  const file = e.target.files && e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    const text = ev.target.result;
    const textarea = $('#resumeInputText');
    if(textarea){
      textarea.value = text;
      updateResumeWordCount();
      runAtsScan();
      toast(`Loaded file: ${file.name}`);
    }
  };
  reader.readAsText(file);
});

// Initial Setup
renderRecommended();
renderJobs();
renderApplications();
renderRecruiterDashboard();
renderAdminDashboard();

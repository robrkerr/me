
export const urls = {
  twitter: "https://twitter.com/robrkerr",
  github: "https://github.com/robrkerr",
  vlc: "http://www.veitchlister.com.au/",
  googleScholar: "https://scholar.google.com.au/citations?user=ptV_Nz0AAAAJ&hl=en&oi=sra",
  geoff: "http://www.qbi.uq.edu.au/professor-geoffrey-goodhill",
  tony: "http://www.bme.unimelb.edu.au/people/staff.php?person_ID=5669",
  david: "http://www.ee.unimelb.edu.au/people/staff.php?person_ID=16545",
  doreen: "http://www.mech.unimelb.edu.au/people/staff.php?person_ID=401",
  neuroEng: "http://www.ee.unimelb.edu.au/neuroengineering/",
  ibmResearch: "http://researchweb.watson.ibm.com/labs/australia/",
  anyrhyme: "http://anyrhyme.com/",
  cssConfAU: "http://2016.cssconf.com.au/",
  jsConfAU: "http://2016.jsconfau.com/",
  decompress: "http://2016.decompress.com.au/",
  cfpBlog: "http://2016.jsconfau.com/2016/07/01/cfp.html#anonymised-description-field",
  cfpCode: "https://github.com/robrkerr/smart-proposals",
  d3course: "http://isakiko.github.io/D3-visualising-data/",
  alphaGo: "http://www.nature.com/nature/journal/v529/n7587/full/nature16961.html",
  meRepo: "https://github.com/robrkerr/me"
}

export function getPageScroll() {
  if (window.pageYOffset != undefined) {
    return pageYOffset;
  } else {
    return document.documentElement.scrollTop || document.body.scrollTop || 0;
  }
}

export function getMargins(positions, rowHeight) {
  const numTopHeadings = positions.filter(p => p == 'above').length
  const topHeadingHeight = numTopHeadings * rowHeight
  const numBottomHeadings = positions.filter(p => p == 'below').length
  const bottomHeadingHeight = (numBottomHeadings + 1.2/2.6) * rowHeight
  return {
    top: topHeadingHeight,
    bottom: bottomHeadingHeight
  }
}

export function getSectionList(sections,positions) {
  return sections.map((s,i) => ({...s, 
    above: positions[i] == 'above',
    below: positions[i] == 'below'
  }))
}

export function getColors(sectionList) {
  const aboveSections = sectionList.filter(s => s.above)
  const withinSections = sectionList.filter(s => !s.above && !s.below)
  const belowSections = sectionList.filter(s => s.below)
  const anyAbove = aboveSections.length > 0
  const allAbove = aboveSections.length == sectionList.length
  const lastAbove = aboveSections[aboveSections.length-1]
  const firstWithinOrBelow = withinSections[0] || belowSections[0]
  const currentSection = lastAbove || firstWithinOrBelow
  return {
    background: currentSection.bgColor,
    text: currentSection.textColor,
    highlight: currentSection.highlightColor,
    docBackground: anyAbove ? currentSection.darkBgColor : "hsl(40,100%,98%)"
  }
}

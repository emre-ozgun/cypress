// @ts-ignore / session support is needed for visiting about:blank between tests
describe('multi-domain', { experimentalSessionSupport: true, experimentalMultiDomain: true }, () => {
  beforeEach(() => {
    cy.visit('/fixtures/multidomain.html')
    cy.get('a').click()
  })

  describe('all cypress commands', () => {
    // get, contains, within, root
    it('runs querying commands in secondary domain', () => {
      // @ts-ignore
      cy.switchToDomain('127.0.0.1:3501', () => {
        cy.root().should('match', 'html')
        cy.get('[data-cy="dom-check"]')
        cy.contains('From a secondary domain')
        cy.get('form').within(() => {
          // TODO: Why doesn't this work
          // cy.get('[type="email"]')
        })
      })
    })

    // children, closest, eq, filter, find, first, last, next,
    // nextAll, nextUntil, not, parent, parents, parentsUntil,
    // prev, prevAll, prevUntil, siblings
    it('runs traversal commands in secondary domain', () => {
      // @ts-ignore
      cy.switchToDomain('127.0.0.1:3501', () => {
      })
    })

    // type, focus, blur, clear, submit, click, dblclick, rightclick,
    // check, uncheck, select, scrollIntoView, scrollTo, trigger
    it('runs actions commands in secondary domain', () => {
      // @ts-ignore
      cy.switchToDomain('127.0.0.1:3501', () => {
      })
    })

    // window, document, title
    it('runs window commands in secondary domain', () => {
      // @ts-ignore
      cy.switchToDomain('127.0.0.1:3501', () => {
      })
    })

    // viewport
    it('runs viewport commands in secondary domain', () => {
      // @ts-ignore
      cy.switchToDomain('127.0.0.1:3501', () => {
      })
    })

    // hash, location, url
    it('runs location commands in secondary domain', () => {
      // @ts-ignore
      cy.switchToDomain('127.0.0.1:3501', () => {
      })
    })

    // go, reload, visit
    it('runs navigation commands in secondary domain', () => {
      // @ts-ignore
      cy.switchToDomain('127.0.0.1:3501', () => {
      })
    })

    // should, and, expect, assert
    it('runs assertion commands in secondary domain', () => {
      // @ts-ignore
      cy.switchToDomain('127.0.0.1:3501', () => {
      })
    })

    // end, exec, focused, screenshot, wrap
    it('runs misc commands in secondary domain', () => {
      // @ts-ignore
      cy.switchToDomain('127.0.0.1:3501', () => {
      })
    })

    // each, its, invoke, spread, then
    it('runs connector commands in secondary domain', () => {
      // @ts-ignore
      cy.switchToDomain('127.0.0.1:3501', () => {
      })
    })

    // as
    it('runs aliased commands in secondary domain', () => {
      // @ts-ignore
      cy.switchToDomain('127.0.0.1:3501', () => {
      })
    })

    // wait
    it('runs waiting commands in secondary domain', () => {
      // @ts-ignore
      cy.switchToDomain('127.0.0.1:3501', () => {
      })
    })

    // server, request, route
    it('runs network request commands in secondary domain', () => {
      // @ts-ignore
      cy.switchToDomain('127.0.0.1:3501', () => {
      })
    })

    // fixtures, readFile, writeFile
    it('runs file commands in secondary domain', () => {
      // @ts-ignore
      cy.switchToDomain('127.0.0.1:3501', () => {
      })
    })

    // clearLocalStorage
    it('runs local storage commands in secondary domain', () => {
      // @ts-ignore
      cy.switchToDomain('127.0.0.1:3501', () => {
      })
    })

    // clearCookies
    it('runs cookie commands in secondary domain', () => {
      // @ts-ignore
      cy.switchToDomain('127.0.0.1:3501', () => {
      })
    })

    // spy, stub, clock, tick
    it('runs spy, stub, and clock commands in secondary domain', () => {
      // @ts-ignore
      cy.switchToDomain('127.0.0.1:3501', () => {
      })
    })
  })
})

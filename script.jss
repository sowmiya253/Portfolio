```javascript
/* =========================
   HERO CHART
========================= */

const chartCanvas =
    document.getElementById("heroChart");

if (chartCanvas) {

    const ctx =
        chartCanvas.getContext("2d");

    const gradient =
        ctx.createLinearGradient(
            0,
            0,
            0,
            220
        );

    gradient.addColorStop(
        0,
        "rgba(116, 87, 217, 0.25)"
    );

    gradient.addColorStop(
        1,
        "rgba(116, 87, 217, 0)"
    );


    new Chart(ctx, {

        type: "line",

        data: {

            labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun"
            ],

            datasets: [{

                data: [
                    42,
                    58,
                    48,
                    73,
                    67,
                    89
                ],

                borderColor:
                    "#7457d9",

                backgroundColor:
                    gradient,

                borderWidth:
                    3,

                fill:
                    true,

                tension:
                    0.4,

                pointRadius:
                    0,

                pointHoverRadius:
                    5

            }]

        },

        options: {

            responsive:
                true,

            maintainAspectRatio:
                false,

            plugins: {

                legend: {
                    display:
                        false
                }

            },

            scales: {

                x: {

                    display:
                        false

                },

                y: {

                    display:
                        false

                }

            }

        }

    });

}


/* =========================
   NAVBAR ACTIVE LINK
========================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".navbar nav a");


window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            if (
                window.scrollY >=
                sectionTop
            ) {

                current =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.style.color = "";

            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.style.color =
                    "#7457d9";

            }

        });

    }
);


/* =========================
   SIMPLE REVEAL ANIMATION
========================= */

const revealElements =
    document.querySelectorAll(
        ".project-card, .skill-card, .process-card, .timeline-item, .stat-card"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold:
                0.12
        }
    );


revealElements.forEach(element => {

    element.style.opacity =
        "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    observer.observe(element);

});
```

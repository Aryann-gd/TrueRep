export const BLOG_POSTS = {
  'how-ai-rep-counting-works': {
    slug: 'how-ai-rep-counting-works',
    title: 'How AI Rep Counting Works: A Technical Deep Dive',
    seoTitle: 'How AI Rep Counting Works: A Technical Deep Dive',
    description: 'Explore how on-device AI and MediaPipe 33-point pose estimation track body kinematics, joint articulation angles, and rep depth in real time without cloud latency.',
    publishDate: '2026-10-01',
    modifiedDate: '2026-10-05',
    readTime: '8 min read',
    author: 'TrueRep Engineering Team',
    category: 'AI & Engineering',
    coverImage: '/assets/ai_workout_vision.jpg',
    excerpt: 'Computer vision rep counting has evolved beyond simple motion detection. Here is how modern on-device neural networks calculate 3D joint landmarks at 30+ FPS to guarantee only true reps are counted.',
    content: `
## The Evolution of Workout Tracking: From Accelerometers to Computer Vision

For over a decade, fitness wearables relied on three-axis accelerometers and barometric altimeters to estimate exercise volume. While these sensors excel at linear steps and cycling cadence, they are notoriously blind to resistance training mechanics. A smartwatch cannot differentiate between a full parallel back squat and a quarter-depth knee bend. It cannot detect whether your elbows locked out on a military press or whether lumbar hyperextension occurred during a deadlift.

TrueRep was engineered to solve this fundamental telemetry gap through real-time on-device computer vision. By leveraging Google MediaPipe 3D joint landmark kinematics directly inside your phone's neural processing unit (NPU) or GPU, TrueRep measures exact anatomical articulation in three dimensions—without needing wearable straps or cloud servers.

---

## 33 3D Anatomical Landmarks: Mapping the Human Kinetic Chain

When you set your phone against a water bottle or gym wall and face the camera, TrueRep captures video frames at 30 to 60 frames per second. The on-device inference pipeline does not store or transmit raw video; instead, each frame passes through a lightweight convolutional neural network that detects **33 three-dimensional landmarks**:

1. **Head & Neck**: Nose, inner/outer eyes, ears, and mouth.
2. **Torso Core**: Left/right shoulders, hips, and cervical spine midline.
3. **Upper Limbs**: Shoulders, elbows, wrists, pinky, index, and thumb tips.
4. **Lower Limbs**: Hips, knees, ankles, heels, and toe indices.

Each landmark is represented as a coordinates vector: \`P = (x, y, z, v)\`, where:
- \`x\` and \`y\` denote normalized screen coordinates (0.0 to 1.0).
- \`z\` represents relative depth from the camera focal plane, inferred from perspective and anatomical limb proportions.
- \`v\` represents landmark visibility confidence (0.0 to 1.0). If an arm is obscured or occluded, low-confidence points are filtered out via Kalman smoothing rather than producing false rep triggers.

---

## Kinematic Angle Calculation: The Geometry of a True Rep

To calculate whether an exercise repetition is legitimate, TrueRep evaluates multi-joint vectors in Euclidean 3D space.

For any joint B flanked by adjacent anatomical points A and C (such as the knee joint K flanked by hip H and ankle A):
The joint angle is calculated instantaneously using 3D vector dot product trigonometry to determine exact degrees of flexion and extension.

### Deep Squat Depth Verification
- **Standing lockout**: Hip-Knee-Ankle angle ~175° to 180°.
- **Descent phase**: Angle smoothly decreases past 120° down to 90°.
- **Parallel / Valid depth threshold**: Angle crosses 90° or below (femur parallel to floor plane).
- **Ascent phase**: User returns to full extension >= 165°.

If the athlete only dips to 105° and rebounds early, TrueRep flags the repetition as a partial attempt. The rep counter refuses to increment, and the on-device voice coach issues an immediate audio cue: *"Hit full depth before ascending."*

---

## State Machine Architecture: Preventing False Double Counts

A primary challenge in automated rep tracking is noisy oscillations at turnaround points (the eccentric-to-concentric transition). TrueRep eliminates false double counting using a robust finite-state machine (FSM) combined with hysteresis thresholds:

1. **STATE_READY**: Athlete detected in starting posture; stability check passed.
2. **STATE_ECCENTRIC**: Progressive decrease in primary joint angle beyond initiation threshold.
3. **STATE_INFLECTION**: Landmark angle achieves validated target depth and velocity approaches zero.
4. **STATE_CONCENTRIC**: Progressive ascent with positive velocity vector.
5. **STATE_COMPLETED**: Joint returns to lockout angle, confirming complete repetition.

By enforcing an angular hysteresis zone of 15 degrees, micro-movements, adjustments, or tremors under heavy load cannot accidentally trigger extra repetitions.

---

## Zero-Cloud On-Device Processing: Why Privacy Equals Speed

Transmitting high-resolution video streams to cloud servers introduces significant downsides:
- **Network Latency**: Round-trip cloud API requests take 250ms to 1200ms, making real-time voice corrections useless.
- **Data Costs & Bandwidth**: Streaming 1080p video consumes gigabytes of mobile data.
- **Biometric Privacy Risks**: Uploading raw video footage of your home or gym introduces unacceptable surveillance risks.

TrueRep executes all inference natively on your Android device hardware accelerators via INT8-quantized TFLite models. Camera frames are processed in volatile RAM buffers and immediately overwritten. Average frame inference takes just **14 to 22 milliseconds** on modern mid-range Android processors, enabling 45+ FPS real-time feedback with zero network traffic.

---

## The TrueRep Advantage: Strength Ranks Tied to Form

Because TrueRep tracks exact range of motion, reps can no longer be faked. This allows the TrueRep platform to introduce competitive **Gym Strength Ranks**—from Wood all the way to Olympian. When every rep is measured by computer vision, your rank points reflect genuine biomechanical mastery.
    `
  },
  '5-bodyweight-exercises-youre-probably-doing-wrong': {
    slug: '5-bodyweight-exercises-youre-probably-doing-wrong',
    title: "5 Bodyweight Exercises You're Probably Doing Wrong",
    seoTitle: "5 Bodyweight Exercises You're Probably Doing Wrong",
    description: 'Learn the common biomechanical mistakes in squats, push-ups, dips, and planks, and discover how real-time AI form coaching corrects them instantly.',
    publishDate: '2026-10-02',
    modifiedDate: '2026-10-05',
    readTime: '7 min read',
    author: 'TrueRep Fitness Lab',
    category: 'Biomechanics & Form',
    coverImage: '/assets/ai_pushup_tracking.jpg',
    excerpt: 'Bodyweight exercises seem simple, yet subtle errors in joint alignment rob you of muscle gains and strain your connective tissue. Here are the 5 most common errors and how AI coaching solves them.',
    content: `
## Why "Simple" Calisthenics Are Deceptively Hard

Bodyweight exercises form the bedrock of functional human movement. Because they require no barbells or gym machines, athletes often assume their technique is naturally correct. In reality, calisthenics exercises like push-ups and bodyweight squats place immense demands on dynamic stabilizer muscles, core rigidity, and joint tracking.

Without external coaching or a mirror, small compensation patterns develop quickly. Over time, these flawed patterns lead to shoulder impingement, lower back soreness, and plateaued strength. Here are five foundational exercises most athletes perform with compromised mechanics—and how real-time AI feedback fixes them.

---

## 1. The Bodyweight Squat: Knee Valgus & "Cheated" Depth

### The Common Mistake:
The two most frequent squat errors are **knee valgus** (knees collapsing inward during ascent) and **premature turnaround** (stopping 2 to 4 inches above parallel). When the knees cave inward, the patellofemoral joint endures uneven shear forces, straining the medial collateral ligament (MCL). Meanwhile, stopping above parallel reduces gluteus maximus recruitment by more than 40%.

### The Biomechanical Fix:
- Screw your feet into the floor, actively driving external hip rotation.
- Track your knees directly in line with your second and third toes throughout the entire rep.
- Descend until your hip crease dips slightly below the apex of your knee joint.

### How TrueRep Solves It:
TrueRep's 33-point pose estimation continuously checks the lateral distance between your knee landmarks relative to your ankle landmarks. If your knees collapse inward during the concentric drive, TrueRep issues a live audio cue: *"Push knees out!"* while withholding rep credit until true 90-degree depth is achieved.

---

## 2. The Standard Push-Up: Flared Elbows & Lumbar Sagging

### The Common Mistake:
Athletes frequently flare their elbows at a 90-degree angle to their torso ("T-position push-ups"). This severely compresses the rotator cuff tendons against the acromion process, leading to subacromial bursitis. Additionally, weak anterior core engagement causes the hips to sag toward the floor, turning the movement into a lumbar hyperextension rather than a chest and tricep press.

### The Biomechanical Fix:
- Form an "arrowhead" shape: tuck your elbows to a 45-degree angle relative to your ribcage.
- Maintain a rigid hollow-body plank by squeezing your glutes and bracing your rectus abdominis.
- Descend until your chest is within 1 to 2 inches of the floor, achieving full scapular retraction.

### How TrueRep Solves It:
TrueRep monitors the co-linear alignment of your shoulder, hip, and ankle landmarks. If your hip coordinates sag below the shoulder-ankle plane by more than 12%, TrueRep pauses the set timer and reminds you to engage your core before counting the next rep.

---

## 3. The Parallel Bar Dip: Inadequate Scapular Depression

### The Common Mistake:
When performing dips, lifters frequently allow their shoulders to shrug up into their ears at the bottom of the movement. This uncontrolled anterior shoulder glide stretches the anterior capsule under bodyweight load, creating extreme joint instability.

### The Biomechanical Fix:
- Actively depress your scapulae throughout the entire set (push the bars downward and keep your neck long).
- Lean slightly forward (roughly 15 to 20 degrees) to distribute tension into the pectoralis major.
- Stop when the shoulder joint is level with the elbow (approx. 90 degrees), avoiding excessive hyper-extension.

---

## 4. The Walking Lunge: Forward Torso Collapse & Short Stride

### The Common Mistake:
Lifters often step with too short a stride, causing the front knee to shoot excessively far past the toes while lifting the front heel off the ground. Concurrently, the torso collapses forward over the thigh, losing spinal neutrality.

### The Biomechanical Fix:
- Step out far enough so that both front and rear knees achieve approximately 90-degree angles at bottom depth.
- Keep 70% of your weight distributed through the mid-foot and heel of the lead leg.
- Maintain an upright torso perpendicular to the floor to ensure balanced hip extension.

---

## 5. The Plank: Forward Head Posture & Winged Scapulae

### The Common Mistake:
During isometric planks, athletes often drop their head toward the floor (cervical spine flexion) or let their shoulder blades pinch together without active chest pushing (scapular winging). This transforms an active core stability drill into passive hanging on connective ligaments.

### The Biomechanical Fix:
- Tuck your chin lightly to maintain a neutral cervical spine.
- Actively push the floor away to protract your shoulder blades slightly.
- Squeeze your quads, glutes, and abdominals simultaneously to create full-body tension.

---

## Conclusion: Real-Time Feedback Beats Delayed Corrections

Reviewing your workout on video hours later helps you see mistakes, but it cannot prevent flawed repetitions while they happen. TrueRep's on-device AI gives you the benefits of an expert biomechanics coach standing right next to you—whispering corrections the instant your form deviates from perfection.
    `
  },
  'why-on-device-ai-matters-for-fitness-privacy': {
    slug: 'why-on-device-ai-matters-for-fitness-privacy',
    title: 'Why On-Device AI Matters for Fitness Privacy',
    seoTitle: 'Why On-Device AI Matters for Fitness Privacy',
    description: 'Why camera feeds shouldn’t go to the cloud. Explore zero-cloud architecture and discover how TrueRep protects your biometric telemetry on your Android device.',
    publishDate: '2026-10-03',
    modifiedDate: '2026-10-05',
    readTime: '6 min read',
    author: 'TrueRep Security Architecture',
    category: 'Privacy & Security',
    coverImage: '/assets/hero_poster.jpg',
    excerpt: 'Smart home workout cameras and cloud fitness apps routinely upload video streams of private living rooms and personal workout spaces. Here is why on-device AI is the only ethical path forward.',
    content: `
## The Hidden Surveillance Economy in Digital Fitness

In the pursuit of personalized workout guidance, millions of fitness enthusiasts have unknowingly invited invasive surveillance into their bedrooms, basements, and living rooms. Many popular "smart fitness" mirrors, AI workout apps, and automated motion trackers quietly stream live video feeds to remote cloud data centers.

Once your camera frames are uploaded to a remote server, you lose control over that visual data:
- **Biometric Profiling**: Facial geometry, body circumference, and physical limitations can be cataloged.
- **Background Privacy Leaks**: Cloud video captures your home layout, family members, personal possessions, and private environment.
- **Third-Party Data Brokers**: Workout timestamps, exercise intensity, and health metrics are frequently monetized for targeted health insurance and behavioral advertising.
- **Server-Side Data Breaches**: Cloud databases are high-value targets for cyberattacks and credential theft.

TrueRep was built from day one on a radical counter-principle: **Zero Cloud Video. Zero User Tracking. 100% On-Device Execution.**

---

## Understanding Zero-Cloud Architecture

What does "zero-cloud" actually mean in practical software engineering terms?

In traditional cloud-based AI apps, your phone acts merely as an optical capture terminal. Video frames are compressed and transmitted over HTTP/WebSocket connections to GPU clusters operated by AWS, Google Cloud, or proprietary cloud servers. The remote server executes neural network inference and returns JSON coordinates back down to the device.

In contrast, TrueRep executes the entire inference pipeline **locally inside your smartphone hardware**:

Camera sensor frames are sent to local volatile RAM buffers, processed directly by TensorFlow Lite / MediaPipe on your phone's NPU/GPU, and immediately discarded.

At no point in this pipeline does a single camera frame touch an internet socket, local hard drive, or external server. Once landmark coordinates are extracted, pixel data is wiped from volatile memory within milliseconds.

---

## 4 Pillars of TrueRep's Privacy Architecture

### 1. No Mandatory User Accounts
Most fitness apps demand your email address, phone number, Google/Apple single-sign-on, and date of birth before you can even view a dashboard. TrueRep requires zero registration. When you install TrueRep, you can immediately begin tracking your workouts without creating an account.

### 2. Camera Frames Processed in Volatile RAM Only
TrueRep never writes camera images to persistent flash storage (.jpg, .png, or .mp4). Frame buffers exist solely in temporary RAM for the 18 milliseconds required to extract joint landmarks, after which they are reclaimed by Android garbage collection.

### 3. Fully Functional Offline Operation
You can toggle Airplane Mode on your Android phone, enter an underground basement gym, and enjoy full access to TrueRep. Both the AI vision models and the offline nutritional database operate with zero internet dependency.

### 4. Open-Source Transparency
Proprietary companies ask you to trust their marketing slogans. TrueRep provides cryptographic verification through open-source code under the BSD-3-Clause license on GitHub. Anyone can inspect the network activity and verify that no telemetry packets are transmitted behind the scenes.

---

## The Verdict: You Do Not Need to Sacrifice Privacy for AI

The myth that advanced artificial intelligence requires cloud infrastructure is outdated. Modern smartphone silicon—equipped with dedicated neural processing units—can run billions of operations per second directly in your pocket. TrueRep proves that you can train with world-class AI kinematics without sacrificing a single shred of personal privacy.
    `
  },
  'building-a-90-day-workout-streak': {
    slug: 'building-a-90-day-workout-streak',
    title: 'Building a 90-Day Workout Streak: Science & Strategy',
    seoTitle: 'Building a 90-Day Workout Streak: Science & Strategy',
    description: 'Explore the behavioral psychology and habit-building science behind 90-day workout streaks, rank tiers, and gamified fitness consistency.',
    publishDate: '2026-10-04',
    modifiedDate: '2026-10-05',
    readTime: '7 min read',
    author: 'TrueRep Behavioral Science',
    category: 'Habits & Psychology',
    coverImage: '/assets/brag.jpg',
    excerpt: 'Motivation gets you started, but systemic feedback loops keep you going. Here is the cognitive science of why 90-day streaks and rank tiers rewire long-term workout adherence.',
    content: `
## Why Motivation Fails and Systems Endure

Every January, gym memberships surge by over 30%. By mid-February, more than 80% of those new fitness enthusiasts have abandoned their routines. The reason is simple: **relying on emotional motivation is neurologically unsustainable**.

Motivation is driven by dopamine spikes associated with novel goals. As the initial novelty fades, routine workouts begin competing with daily fatigue, work stress, and the friction of modern life. Without a systematic behavioral feedback loop, willpower alone is depleted within weeks.

To build lifelong physical strength, athletes must transition from outcome-based motivation (*"I want to lose 10 pounds"*) to identity-based habit systems (*"I am an athlete who climbs strength tiers every week"*).

---

## The Neurobiology of the 90-Day Habit Threshold

Seminal research published in the *European Journal of Social Psychology* established that automating a new health habit takes an average of **66 to 90 days**.

During this 90-day neuroplastic window:
1. **Days 1–21 (Destabilization)**: The prefrontal cortex expends heavy cognitive effort to overcome inertia. Resistance is at its peak.
2. **Days 22–60 (Consolidation)**: Neural pathways in the basal ganglia begin taking over repetitive motor routines. Workouts start feeling automatic.
3. **Days 61–90 (Integration)**: The behavior becomes hardwired into personal identity. Skipping a scheduled session triggers cognitive dissonance.

---

## The TrueRep 9-Tier Rank Progression

When athletes receive clear, incremental rank promotions paired with measurable milestones, retention rates skyrocket. TrueRep applies this exact psychological framework to strength training with **Nine Competitive Gym Ranks**:

1. **Wood**: The initiation tier. Establishing baseline routine and calibrating camera setup.
2. **Bronze**: Consistency unlocked. First 7 days of verified clean repetitions.
3. **Silver**: Form stability. Hitting full depth on 90% of reps without audio cue violations.
4. **Gold**: Intermediate mastery. Habit consolidation milestone (30-day streak).
5. **Platinum**: Biomechanical precision under progressive volume.
6. **Diamond**: Advanced strength endurance and dedicated nutrition logging.
7. **Champion**: Top 5% tier. Flawless cadence and sustained weekly accountability.
8. **Titan**: Elite physical conditioning and mastery across all exercise patterns.
9. **Olympian**: The zenith of TrueRep discipline. Sustained 90-day mastery with zero cheated reps.

By attaching your progress to concrete rank badges rather than vague aesthetic changes, your brain receives tangible dopamine reinforcement every single time you step in front of the camera.

---

## 4 Tactical Strategies to Protect Your 90-Day Streak

### 1. The "Never Zero" Rule
On days when life leaves you completely exhausted, lower the barrier to entry rather than breaking the chain. Doing 5 verified squats or 3 clean push-ups maintains the neurological streak loop without requiring a 60-minute exhausting gym session.

### 2. Haptic and Audio Accountability
When TrueRep's voice coach confirms *"Rep 10: Perfect Depth"*, auditory reinforcement validates your effort instantly. This immediate feedback bridges the psychological gap between immediate physical exertion and delayed long-term physique changes.

### 3. Track Fueling Offline
Muscle repair requires adequate protein and calorie tracking. TrueRep's built-in offline nutrition database lets you log your macronutrients within 15 seconds—reinforcing the workout habit with nutritional accountability.

### 4. Forgiving Streak Repair
Life happens: flights, illness, or family emergencies can occasionally interrupt a streak. TrueRep includes rewarded streak repair mechanisms, allowing disciplined athletes to safeguard their hard-earned milestones rather than feeling demoralized by an accidental missed day.

---

## Conclusion: Start Your 90 Days Today

Discipline is not an inborn genetic trait; it is a neurological muscle strengthened by consistent repetition. Set your phone down, open TrueRep, and earn your first verified rep toward Olympian today.
    `
  },
  'truerep-vs-wearables': {
    slug: 'truerep-vs-wearables',
    title: 'TrueRep vs Wearables: Which Tracks Better?',
    seoTitle: 'TrueRep vs Wearables: Which Tracks Better?',
    description: 'Compare smartwatches and wristbands against computer vision AI for counting reps, verifying squat depth, and analyzing workout form.',
    publishDate: '2026-10-05',
    modifiedDate: '2026-10-05',
    readTime: '6 min read',
    author: 'TrueRep Performance Lab',
    category: 'Hardware vs AI',
    coverImage: '/assets/ai_workout_vision.jpg',
    excerpt: 'Smartwatches are fantastic for running and heart rate, but fail miserably at strength training form. Here is a head-to-head comparison of wearable sensors versus computer vision AI.',
    content: `
## The Wearable Blindspot: Why Smartwatches Struggle with Weights

Over 200 million people wear smartwatches and fitness wristbands every day. Devices from Apple, Garmin, Whoop, and Samsung have revolutionized cardiovascular telemetry: GPS pacing, resting heart rate variability (HRV), and sleep architecture tracking are now accessible to anyone.

However, when you step into the weight room or begin a bodyweight calisthenics routine, **wrist-worn wearables encounter severe biomechanical limitations**.

A wristband only knows what your wrist is doing. It measures angular acceleration and rotational velocity at a single point in space. It has zero knowledge of what your knees, hips, spine, or neck are doing.

---

## Head-to-Head Comparison: TrueRep AI vs Fitness Wearables

| Telemetry Metric | Wrist Wearable (Smartwatch) | TrueRep (On-Device Computer Vision) |
| :--- | :--- | :--- |
| **Squat Depth Verification** | Cannot detect (wrist remains stationary) | Measures exact hip/knee joint angle in 3D |
| **Push-Up Chest-to-Deck** | Fails (wrist stays planted on floor) | Tracks torso distance & elbow articulation |
| **Knee Valgus (Inward Caving)** | Zero visibility | Flags knee collapse in real time |
| **Rep Counting Accuracy** | Inaccurate (shaking hands trigger reps) | Requires full joint excursion & lockout |
| **Hardware Required** | $200 – $800 dedicated device | Your existing Android smartphone |
| **Battery Impact** | Requires frequent charging | Native phone battery utilization |
| **Subscription Paywalls** | Often $15 – $30/month | 100% Free & Open-Source |

---

## Why Accelerometers Fail at Push-Ups and Squats

### The Planted-Hand Paradox:
During a standard push-up, your palms remain pressed flat against the floor. From the perspective of an IMU in a smartwatch, your wrist is completely motionless. Some wearables try to deduce movement from subtle forearm skin tremors, resulting in erratic rep counts—missing reps entirely or counting wrist adjustments as extra sets.

TrueRep, by contrast, observes your entire kinetic chain. It tracks your shoulders descending toward the ground, evaluates the angle of your thoracic spine, and verifies that your elbows bend past 90 degrees before awarding rep credit.

### The Barbell Squat Blindspot:
When back squatting, your hands grip the bar on your upper traps. Throughout the entire eccentric descent and concentric ascent, your hands travel with the bar at a steady velocity, while your wrists maintain a locked isometric hold. A wearable cannot tell if you achieved a full Olympic-depth squat below parallel or performed a superficial quarter-dip.

TrueRep calculates the exact three-dimensional angle formed between your hip, knee, and ankle landmarks. If your femur fails to break parallel, TrueRep will not count the rep.

---

## Can Wearables and AI Vision Work Together?

Yes! Wearables and computer vision AI are complementary technologies:
- Use your smartwatch or heart rate strap for **systemic cardiovascular load, resting HRV, and sleep recovery**.
- Use TrueRep for **real-time biomechanical form coaching, rep cadence verification, and strength rank progression**.

By combining systemic physiological recovery data with exact kinematic execution, you unlock the ultimate athletic feedback system—ensuring that every rep you perform is a true rep.
    `
  }
};

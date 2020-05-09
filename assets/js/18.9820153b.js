(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{349:function(e,t,a){"use strict";a.r(t);var i=a(33),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"mldemos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mldemos"}},[e._v("#")]),e._v(" MLDemos")]),e._v(" "),a("p",[a("a",{attrs:{href:"http://mldemos.b4silio.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MLDemos"),a("OutboundLink")],1),e._v(" is an open-source visualization tool for machine learning algorithms created to help studying and understanding how several algorithms function and how their parameters affect and modify the results in problems of classification, regression, clustering, dimensionality reduction, dynamical systems and reward maximization.")]),e._v(" "),a("p",[e._v("MLDemos is open-source and free for personal and academic use.")]),e._v(" "),a("p",[a("img",{attrs:{src:"organizations.png",alt:"organizations"}})]),e._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[e._v("#")]),e._v(" Install")]),e._v(" "),a("h3",{attrs:{id:"binary-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#binary-packages"}},[e._v("#")]),e._v(" Binary Packages")]),e._v(" "),a("h4",{attrs:{id:"legalities"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#legalities"}},[e._v("#")]),e._v(" Legalities")]),e._v(" "),a("p",[e._v("The packages contain binary versions of a number of opensource libraries. I am including them here with the knowledge that this might not be entirely compatible with the distribution policies of each respective library. I will try to contact and get the necessary permissions, to the extent to which this is possible, from the related parties. In the meantime, I distribute this software in good faith, my goal is for people to be able to study and work with the different methods implemented here. See the acknowledgements section below for a list of the people who contributed.\nYou are free to use this software for personal and educational purposes, you are not allowed to use it for commercial purposes. You can redistribute the software as long as you provide a link to this page. Then again, this page will always link to the latest version of the software so you may be better off taking the version here anyway.")]),e._v(" "),a("h3",{attrs:{id:"source-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#source-code"}},[e._v("#")]),e._v(" Source Code")]),e._v(" "),a("p",[e._v("The MLDemos source code can be obtained directly via git or from the public repository (get the "),a("em",[e._v("devel")]),e._v(" branch for the latest release)")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone git://gitorious.org/mldemos/mldemos.git -b devel\n")])])]),a("p",[a("a",{attrs:{href:"https://github.com/b4silio/MLDemos",target:"_blank",rel:"noopener noreferrer"}},[e._v("public GitHub repository"),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"http://mldemos.b4silio.com/MLDemos-0.3.0-source.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("source_backup"),a("OutboundLink")],1),e._v(" (0.3.0)")]),e._v(" "),a("h4",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" "),a("strong",[e._v("Requirements")])]),e._v(" "),a("p",[e._v("The code requires Qt (5.10) and (in part) OpenCV (3.1) and Boost (1.47). Previous versions of these libraries might work as well but you might as well use the newer version. Be sure to adjust your include and lib paths to point them to the correct directories.")]),e._v(" "),a("p",[e._v("The software was compiled and tested on Mac OSX High Sierra, Windows 10, Gentoo, Ubuntu and Kubuntu 10.04, using QtCreator 2.1 and 2.6.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Windows\nIn order to compile MLDemos in windows, you will need MinGW (commonly installed with the QtSDK for MinGW.")])]),e._v(" "),a("li",[a("p",[e._v("Debian\nProf. Barak A. Pearlmutter has created a debian package, which will be available soon. In the meantime you can build it following the instruction below:")])])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone git://github.com/barak/mldemos.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" mldemos\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout debian\ndpkg-checkbuilddeps\nfakeroot debian/rules binary\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" dpkg --install "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/mldemos_*.deb\n")])])]),a("blockquote",[a("p",[e._v("Note: OpenCV 2.4 is not available directly (only 2.1 is), which will require you to build OpenCV2.4. This is only necessary to use MLP and Boosting. These are two important algorithms, so you might as well make the effort:")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone git://github.com/barak/opencv.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" opencv\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout master\ndpkg-checkbuilddeps\nfakeroot debian/rules binary\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" dpkg --install "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/*opencv*.deb\n")])])]),a("p",[e._v("Again, a huge thanks to Barak!")]),e._v(" "),a("h3",{attrs:{id:"known-bugs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#known-bugs"}},[e._v("#")]),e._v(" "),a("strong",[e._v("Known Bugs")])]),e._v(" "),a("ul",[a("li",[e._v("WINDOWS: Clearing the canvas while in the 3D display leaves part of the memory occupied, which can accumulate when this is done several times (part of a memory bug on Windows only)")]),e._v(" "),a("li",[e._v("LINUX (CDE package) loading and saving of external files does not work")]),e._v(" "),a("li",[e._v("Approximate KNN classification creates weird blank spaces on some machines and with some metrics.")]),e._v(" "),a("li",[e._v("Saving does not work on the linux CDE package")]),e._v(" "),a("li",[e._v("Resizing the canvas when a reward map has been drawn does not update the underlying data (avoid doing it).")]),e._v(" "),a("li",[e._v("In Boosting, changing the data does not recompute the learners, which can lead to bad results if the data has changed boundaries significantly")])]),e._v(" "),a("h3",{attrs:{id:"what-s-new-changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-s-new-changelog"}},[e._v("#")]),e._v(" "),a("strong",[e._v("What's New")]),e._v(" "),a("a",{attrs:{href:"http://mldemos.b4silio.com/changelog.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("Changelog"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("v0.5.0")]),e._v(" "),a("h3",{attrs:{id:"new-visualization-and-dataset-features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-visualization-and-dataset-features"}},[e._v("#")]),e._v(" "),a("em",[e._v("New Visualization and Dataset Features")])]),e._v(" "),a("ul",[a("li",[a("em",[e._v("Added 3D visualization of samples and classification, regression and maximization results")])]),e._v(" "),a("li",[a("em",[e._v("Added Visualization panel with individual plots, correlations, density, etc.")])]),e._v(" "),a("li",[a("em",[e._v("Added Editing tools to drag/magnet data, change class, increase or decrease dimensions of the dataset")])]),e._v(" "),a("li",[a("em",[e._v("Added categorical dimensions (indexed dimensions with non-numerical values)")])]),e._v(" "),a("li",[a("em",[e._v("Added Dataset Editing panel to swap, delete and rename dimensions, classes or categorical values")])]),e._v(" "),a("li",[a("em",[e._v("Several bug-fixes for display, import/"),a("strong",[e._v("export")]),e._v(" of data, classification performance")])])]),e._v(" "),a("h3",{attrs:{id:"new-algorithms-and-methodologies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-algorithms-and-methodologies"}},[e._v("#")]),e._v(" "),a("em",[e._v("New Algorithms and methodologies")])]),e._v(" "),a("ul",[a("li",[a("p",[a("em",[e._v("Added Grid-Search panel for batch-testing ranges of values for up to two parameters at a time")])])]),e._v(" "),a("li",[a("p",[a("em",[e._v("Added One-vs-All multi-class classification for non-multi-class algorithms")])])]),e._v(" "),a("li",[a("p",[a("em",[e._v("Trained models can now be kept and tested on new data (training on one dataset, testing on another)")])])]),e._v(" "),a("li",[a("p",[a("em",[e._v("Added Automatic Relevance Determination for SVM with RBF kernel (Thanks to Ashwini Shukla!)")])])]),e._v(" "),a("li",[a("p",[a("em",[e._v("Added Growing Hierarchical Self Organizing Maps (original code by Michael Dittenbach)")])])]),e._v(" "),a("li",[a("p",[a("em",[e._v("Added Random Forest classification")])])]),e._v(" "),a("li",[a("p",[a("em",[e._v("Added LDA as a classifier (in addition to projector)")])])]),e._v(" "),a("li",[a("p",[a("em",[e._v("Added Save/Load Model option for GMMs and SVMs")])])])]),e._v(" "),a("h2",{attrs:{id:"screenshots"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#screenshots"}},[e._v("#")]),e._v(" Screenshots")]),e._v(" "),a("p",[a("img",{attrs:{src:"MLDemos.png",alt:"MLDemos"}})]),e._v(" "),a("h2",{attrs:{id:"algorithms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#algorithms"}},[e._v("#")]),e._v(" Algorithms")]),e._v(" "),a("h3",{attrs:{id:"implemented-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implemented-methods"}},[e._v("#")]),e._v(" Implemented Methods")]),e._v(" "),a("h4",{attrs:{id:"classification"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#classification"}},[e._v("#")]),e._v(" "),a("strong",[e._v("Classification")])]),e._v(" "),a("ul",[a("li",[e._v("Support Vector Machine (SVM) (C, nu, Pegasos)")]),e._v(" "),a("li",[e._v("Relevance Vector Machine (RVM)")]),e._v(" "),a("li",[e._v("Gaussian Mixture Models (GMM)")]),e._v(" "),a("li",[e._v("Multi-Layer Perceptron + BackPropagation")]),e._v(" "),a("li",[e._v("Gentle AdaBoost + Naive Bayes")]),e._v(" "),a("li",[e._v("Approximate K-Nearest Neighbors (KNN)")]),e._v(" "),a("li",[e._v("Gaussian Process Classification (GP)")]),e._v(" "),a("li",[e._v("Random Forests")])]),e._v(" "),a("h4",{attrs:{id:"regression"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#regression"}},[e._v("#")]),e._v(" "),a("strong",[e._v("Regression")])]),e._v(" "),a("ul",[a("li",[e._v("Support Vector Regression (SVR)")]),e._v(" "),a("li",[e._v("Relevance Vector Regression (RVR)")]),e._v(" "),a("li",[e._v("Gaussian Mixture Regression (GMR)")]),e._v(" "),a("li",[e._v("MLP + BackProp")]),e._v(" "),a("li",[e._v("Approximate KNN")]),e._v(" "),a("li",[e._v("Gaussian Process Regression (GPR)")]),e._v(" "),a("li",[e._v("Sparse Optimized Gaussian Processes (SOGP)")]),e._v(" "),a("li",[e._v("Locally Weighed Scatterplot Smoothing (LOWESS)")]),e._v(" "),a("li",[e._v("Locally Weighed Projection Regression (LWPR)")])]),e._v(" "),a("h4",{attrs:{id:"dynamical-systems"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dynamical-systems"}},[e._v("#")]),e._v(" "),a("strong",[e._v("Dynamical Systems")])]),e._v(" "),a("ul",[a("li",[e._v("GMM+GMR")]),e._v(" "),a("li",[e._v("LWPR")]),e._v(" "),a("li",[e._v("SVR")]),e._v(" "),a("li",[e._v("SEDS")]),e._v(" "),a("li",[e._v("SOGP (Slow!)")]),e._v(" "),a("li",[e._v("MLP")]),e._v(" "),a("li",[e._v("KNN")]),e._v(" "),a("li",[e._v("Augmented-SVM (ASVM)")])]),e._v(" "),a("h4",{attrs:{id:"clustering"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clustering"}},[e._v("#")]),e._v(" "),a("strong",[e._v("Clustering")])]),e._v(" "),a("ul",[a("li",[e._v("K-Means")]),e._v(" "),a("li",[e._v("Soft K-Means")]),e._v(" "),a("li",[e._v("Kernel K-Means")]),e._v(" "),a("li",[e._v("K-Means++")]),e._v(" "),a("li",[e._v("GMM")]),e._v(" "),a("li",[e._v("One Class SVM")]),e._v(" "),a("li",[e._v("FLAME")]),e._v(" "),a("li",[e._v("DBSCAN")])]),e._v(" "),a("h4",{attrs:{id:"projections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#projections"}},[e._v("#")]),e._v(" "),a("strong",[e._v("Projections")])]),e._v(" "),a("ul",[a("li",[e._v("Principal Component Analysis (PCA)")]),e._v(" "),a("li",[e._v("Kernel PCA")]),e._v(" "),a("li",[e._v("Independent Component Analysis (ICA)")]),e._v(" "),a("li",[e._v("Canonical Correlation Analysis (CCA)")]),e._v(" "),a("li",[e._v("Linear Discriminant Analysis (LDA)")]),e._v(" "),a("li",[e._v("Fisher Linear Discriminant")]),e._v(" "),a("li",[e._v("EigenFaces to 2D (using PCA)")])]),e._v(" "),a("h4",{attrs:{id:"reward-maximization-reinforcement-learning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reward-maximization-reinforcement-learning"}},[e._v("#")]),e._v(" "),a("strong",[e._v("Reward Maximization")]),e._v(" "),a("em",[e._v("(Reinforcement Learning)")])]),e._v(" "),a("ul",[a("li",[e._v("Random Search")]),e._v(" "),a("li",[e._v("Random Walk")]),e._v(" "),a("li",[e._v("PoWER")]),e._v(" "),a("li",[e._v("Genetic Algorithms (GA)")]),e._v(" "),a("li",[e._v("Particle Swarm Optimization")]),e._v(" "),a("li",[e._v("Particle Filters")]),e._v(" "),a("li",[e._v("Donut")]),e._v(" "),a("li",[e._v("Gradient-Free Methods (nlopt)")])]),e._v(" "),a("h3",{attrs:{id:"contributing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contributing"}},[e._v("#")]),e._v(" Contributing")]),e._v(" "),a("p",[e._v("If you are developing a new algorithm that could fit into the MLDemos framework and would like to see it integrated into the software, please get in contact (see info below) and describe what type of help you require for the implementation of a MLDemos plugin.")]),e._v(" "),a("h3",{attrs:{id:"acknowledgements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acknowledgements"}},[e._v("#")]),e._v(" Acknowledgements")]),e._v(" "),a("p",[e._v("This program would not exist if a number of people had not put a lot of effort into implementing the different algorithms that are combined here into a single program.")]),e._v(" "),a("ul",[a("li",[e._v("Florent D'Hallouin (GMM + GMR) - "),a("a",{attrs:{href:"http://lasa.epfl.ch/",target:"_blank",rel:"noopener noreferrer"}},[e._v("LASA"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Dan Grollman (SOGP) - "),a("a",{attrs:{href:"http://lasa.epfl.ch/",target:"_blank",rel:"noopener noreferrer"}},[e._v("LASA"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Mohammad Khansari (SEDS + DSAvoid) - "),a("a",{attrs:{href:"http://lasa.epfl.ch/",target:"_blank",rel:"noopener noreferrer"}},[e._v("LASA"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Ashwini Shukla (ASVM, ARD Kernels) - "),a("a",{attrs:{href:"http://lasa.epfl.ch/",target:"_blank",rel:"noopener noreferrer"}},[e._v("LASA"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Stephane Magnenat (ESMLR) - "),a("a",{attrs:{href:"http://stephane.magnenat.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("website"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Chih-Chung Chang and Chih-Jen Lin (libSVM) - "),a("a",{attrs:{href:"http://www.csie.ntu.edu.tw/~cjlin/libsvm/",target:"_blank",rel:"noopener noreferrer"}},[e._v("website"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("David Mount and Sunik Arya (ANN library) - "),a("a",{attrs:{href:"http://www.cs.umd.edu/~mount/ANN/",target:"_blank",rel:"noopener noreferrer"}},[e._v("website"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Davis E. King (DLIB) - "),a("a",{attrs:{href:"http://dlib.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("website"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Stefan Klanke and Sethu Vijayakumar (LWPR) - "),a("a",{attrs:{href:"http://www.ipab.inf.ed.ac.uk/slmc/software/lwpr/",target:"_blank",rel:"noopener noreferrer"}},[e._v("website"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Robert Davies (Newmat) - "),a("a",{attrs:{href:"http://www.robertnz.net/nm_intro.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("website"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("JF Cardoso (ICA) - "),a("a",{attrs:{href:"http://www.tsi.enst.fr/icacentral/algos.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("website"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Steven G. Johnson (NLOpt) - "),a("a",{attrs:{href:"http://ab-initio.mit.edu/wiki/index.php/NLopt",target:"_blank",rel:"noopener noreferrer"}},[e._v("website"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("The WillowGarage crowd (OpenCV) - "),a("a",{attrs:{href:"http://opencv.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("website"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Trolltech/Nokia/Digia (Qt) - "),a("a",{attrs:{href:"http://qt.digia.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("website"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("The authors of several of the icons - "),a("a",{attrs:{href:"http://www.iconeasy.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("website"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("The PhD students following the 2012 ML class at EPFL (Julien Eberle, Pierre-Antoine Sondag, Guillaume deChambrier, Klas Kronander, Renaud Richardet, Raphael Ullman)")])]),e._v(" "),a("p",[e._v("Moreover, the program itself would be far less performant without the work of the support and development team at LASA: Christophe Paccolat, Nicolas Sommer and Otpal Vittoz.")]),e._v(" "),a("p",[e._v("Thanks also to the people who have not contributed code but have contributed no less directly: Aude Billard, for being one of the best bosses one could wish for, François Fleuret, for a bunch of fruitful discussions, and the AML 2010,  and 2011 classes for patiently giving it a first test-drive.")]),e._v(" "),a("h2",{attrs:{id:"quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[e._v("#")]),e._v(" quick start")]),e._v(" "),a("h3",{attrs:{id:"very-quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#very-quick-start"}},[e._v("#")]),e._v(" Very quick start")]),e._v(" "),a("ol",[a("li",[e._v("Launch the software")]),e._v(" "),a("li",[e._v("Draw samples by clicking either the left or right mouse button.\n"),a("ol",[a("li",[e._v("left-click generates samples of class 0")]),e._v(" "),a("li",[e._v("right-click generates samples of the class selected in the toolbar (default: 1)")])])]),e._v(" "),a("li",[e._v("Select the Display Options icon\n"),a("ol",[a("li",[e._v("this will allow you to display model information, confidence/likelihood maps and to hide the original samples")]),e._v(" "),a("li",[e._v("the mouse wheel will allow you to zoom in and out")]),e._v(" "),a("li",[e._v("alt+dragging will allow you to pan around the space")])])]),e._v(" "),a("li",[e._v("Select the Algorithms Options icon")]),e._v(" "),a("li",[e._v("Select one of the algorithm icons to open their respective option panels")]),e._v(" "),a("li",[e._v("Click the Classify button to run the algorithm on the current data")])]),e._v(" "),a("h3",{attrs:{id:"importing-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#importing-data"}},[e._v("#")]),e._v(" Importing data")]),e._v(" "),a("p",[e._v("Generating data in MLDemos is done in three different ways: by manually drawing samples, by projecting image data through PCA (via the PCAFaces plugin), or by loading external data.")]),e._v(" "),a("p",[e._v("Comma separated values, or other text-file based value tables can be drag-and-dropped into the interface. In this case a Data Loading dialog will appear to allow choosing which columns or rows should loaded, interpreted as class labels or headers, etc.")]),e._v(" "),a("p",[e._v("Alternatively, a native data format used by the software is ascii-based and contains:")]),e._v(" "),a("ol",[a("li",[e._v("The # of samples followed by # of dimensions")]),e._v(" "),a("li",[e._v("For each sample, one line containing\n"),a("ol",[a("li",[e._v("The sample values space-separated (float, one per each dimension)")]),e._v(" "),a("li",[e._v("The sample class index (integer 0 ... 255)")]),e._v(" "),a("li",[e._v("A flag value (integer 0-3) to terminate the line (unused for the time being)")])])])]),e._v(" "),a("p",[e._v("A simple example would be")]),e._v(" "),a("div",{staticClass:"language-code extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("4 3\n0.10 0.11 0.12 0 0\n0.14 0.91 0.11 0 0\n0.43 0.74 0.41 1 0\n0.28 0.34 0.33 1 0\n")])])]),a("p",[e._v("which presents 4 three-dimensional samples, two from class 0 and one from class 1.")]),e._v(" "),a("p",[e._v("When the file is saved from MLDemos, the software adds the current algorithm parameters (provided an algorithm was selected), which can be useful for demonstration purposes. If no such information is present, the default algorithm parameters are selected.")]),e._v(" "),a("p",[e._v("Drawing manually some samples, or importing a standard dataset and saving it from within MLDemos should give you ample examples on the file syntax.")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("Created by Dr. Basilio Noris at the "),a("a",{attrs:{href:"http://lasa.epfl.ch/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Learning Algorithms and Systems Laboratory"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Expanded upon by the editor of the "),a("a",{attrs:{href:"http://iosdevlog.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("iOSDevLog Blog"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://github.com/iOSDevLog",target:"_blank",rel:"noopener noreferrer"}},[e._v("jiaxianhua"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);